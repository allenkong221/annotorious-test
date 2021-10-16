from typing import Dict, List, Optional
from fastapi import  FastAPI, Form, Body, Request, File, UploadFile
from fastapi.routing import run_endpoint_function
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.templating import Jinja2Templates
from pydantic.types import Json

# Use this to serve a public/index.html
from starlette.responses import FileResponse, StreamingResponse 
from starlette.responses import RedirectResponse
# from preprocessing import *

import os
import json
import aiofiles

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.mount("/build", StaticFiles(directory="build"), name="build")
templates = Jinja2Templates(directory="build")

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8000/",
    "http://localhost:3000/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", response_class=FileResponse)
def read_index(request: Request):
    path = 'build/index.html' 
    return FileResponse(path)

@app.get("/{catchall:path}", response_class=FileResponse) 
def read_index(request: Request):
    # check first if requested file exists
    path = request.path_params["catchall"]
    file = 'build/'+path

    if os.path.exists(file):
        return FileResponse(file)

    # otherwise return index files
    index = 'build/index.html' 
    return FileResponse(index)

app.get('/api/')
@app.post('/api/testingapi')
def test_function():
  return { "state": "New York", "city": "New York City" }



@app.post('/apitest')
def testapi():
    return {"message": "Test success"}

@app.post("/test")
async def data(file: UploadFile = File(...), annotations: str = Body(...)):
    results = {}
    str_annotations = json.loads(str(annotations))

    print(file)
    print(annotations)
    print(type(str_annotations))

    contents = await file.read()
    with open('data/test.jpg', 'wb') as f:
        f.write(contents)

    for item in str_annotations:
        img = crop_image(item, 'data/test.jpg')
        results[item['name']] = extract_text(img)

    print(results)

    return {"message": results}

@app.post("/multitest")
async def multidata(files: List[UploadFile] = File(...), annotations: str = Body(...)):
    results = []
    str_annotations = json.loads(str(annotations))[0]

    for file in files:
        extract = {}
        contents = await file.read()
        with open('data/test.jpg', 'wb') as f:
            f.write(contents)

        for item in str_annotations:
            img = crop_image(item, 'data/test.jpg')
            extract[item['name']] = extract_text(img)
        
        results.append(extract)

    print(results)

    return {"message": results}