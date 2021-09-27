import pytesseract
import cv2

def create_template(annotations):
    template = {}

    
def crop_image(crop_annot, image_path):
    img = cv2.imread(image_path)

    y = crop_annot['top']
    x = crop_annot['left']
    h = crop_annot['height']
    w = crop_annot['width']

    crop_img = img[y:y+h, x:x+w]

    return crop_img

def extract_text(image):
    return pytesseract.image_to_string(image)


