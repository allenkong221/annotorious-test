from IPython.display import Image
import pytesseract
import cv2
pytesseract.pytesseract.tesseract_cmd = 'C:/Program Files/Tesseract-OCR/tesseract.exe'

import os
from google.cloud import vision
import io

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "keyFile.json"

def create_template(annotations):
    template = {}

    
def crop_image(crop_annot, image_path):
    img = cv2.imread(image_path)

    x = crop_annot["left"]
    y = crop_annot["top"]
    w = crop_annot["width"]
    h = crop_annot["height"]

    crop_img = img[y:y+h, x:x+w]

    return crop_img

def extract_text(image):
    content = cv2.imencode('.jpg', image)[1].tobytes()
    image = vision.Image(content=content)
    client = vision.ImageAnnotatorClient()
    response = client.document_text_detection(image=image)

    texts = []
    for page in response.full_text_annotation.pages:
        for i, block in enumerate(page.blocks):  
            for paragraph in block.paragraphs:       
                for word in paragraph.words:
                    word_text = ''.join([symbol.text for symbol in word.symbols])
                    texts.append(word_text)

    return ' '.join(texts)
