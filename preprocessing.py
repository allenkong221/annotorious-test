import pytesseract
import cv2

def create_template(annotations):
    template = {}

    
def crop_image(crop_annot, image_path):
    img = cv2.imread(image_path)

    x = crop_annot[2]
    y = crop_annot[3]
    w = crop_annot[4]
    h = crop_annot[5]

    crop_img = img[y:y+h, x:x+w]

    return crop_img

def extract_text(image):
    return pytesseract.image_to_string(image)


