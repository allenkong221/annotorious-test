import pytesseract
import cv2
pytesseract.pytesseract.tesseract_cmd = 'C:/Program Files/Tesseract-OCR/tesseract.exe'

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
    return pytesseract.image_to_string(image)
