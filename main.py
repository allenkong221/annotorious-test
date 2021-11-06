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
from preprocessing import *

import os
import json
import aiofiles
import random
import string
import csv
import pandas as pd

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
async def data(file: UploadFile = File(...), annotations: str = Body(...)):
    results = {}
    str_annotations = json.loads(str(annotations))

    contents = await file.read()
    with open('data/test.jpg', 'wb') as f:
        f.write(contents)

    for item in str_annotations:
        img = crop_image(item, 'data/test.jpg')
        results[item['name']] = extract_text(img)


    return {"message": results}

@app.post("/api/verification")
async def verification(results: str = Body(...), file: UploadFile = File(...)):
    str_results = json.loads(str(results))
    
    # create template and store in /templates

    letters = string.ascii_letters
    f_name = ''.join(random.choice(letters) for i in range(10))

    df = pd.DataFrame.from_dict(str_results)
    df.to_excel('verification/' + f_name + '.xlsx')


    return {"message": 'OK'}

@app.post("/api/create_template_multidata")
async def create_template_multidata(files: List[UploadFile] = File(...), annotations: str = Body(...), name: str = Body(...)):
    results = []
    str_annotations = json.loads(annotations)
    for i in range(len(files)):
        extract = {}
        contents = await files[i].read()
        with open('data/test.jpg', 'wb') as f:
            f.write(contents)
        i_annotation = str_annotations[i]    

        
        for item in i_annotation:
            img = crop_image(item, 'data/test.jpg')
            extract[item['name']] = extract_text(img)
        
        results.append(extract)

    df = pd.DataFrame.from_dict(str_annotations[-1])
    df.to_excel('templates/' + name + '.xlsx')


    return {"message": results}


@app.post("/api/read_template_and_extract")
async def read_and_extract():
    return {}

@app.post("/api/get_filenames")
async def get_filenames():
    return {"filenames": os.listdir("templates/")}