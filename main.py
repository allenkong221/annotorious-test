from typing import List
from fastapi import  FastAPI, Form, Body, Request, File, UploadFile
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.templating import Jinja2Templates

# Use this to serve a public/index.html
from starlette.responses import FileResponse 
from starlette.responses import RedirectResponse
from preprocessing import *

import os
import json
import aiofiles

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.mount("/dist", StaticFiles(directory="dist"), name="dist")
templates = Jinja2Templates(directory="dist")

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8000/",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Annotations(BaseModel):
    annotations: List[str]


@app.get("/", response_class=FileResponse)
def read_index(request: Request):
    path = 'dist/index.html' 
    return FileResponse(path)

@app.get("/{catchall:path}", response_class=FileResponse) 
def read_index(request: Request):
    # check first if requested file exists
    path = request.path_params["catchall"]
    file = 'dist/'+path

    if os.path.exists(file):
        return FileResponse(file)

    # otherwise return index files
    index = 'dist/index.html' 
    return FileResponse(index)

@app.post('/apitest')
def testapi():
    return {"message": "Test success"}

@app.post("/test")
async def data(file: UploadFile = File(...), annotations: str = Form(...)):
    results = {}

    print(file)
    print(annotations)
    contents = await file.read()
    with open('data/test.jpg', 'wb') as f:
        f.write(contents)

    for item in annotations:
        img = crop_image(item, 'data/test.jpg')
        results[item['name']] = extract_text(img)

    return {"message": results}
