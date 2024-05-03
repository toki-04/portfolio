from django.shortcuts import render

from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.urls import reverse

import segno
import json
import os
import base64
# Create your views here.


def index(request):
    return render(request, "qr/index.html")


# path = os.getcwd()
# parent_dir = os.path.abspath(os.path.join(path, os.pardir))
# qr_dir = os.path.join(parent_dir, "qr_code_generator/static/qr/images/")


os.chdir("./qr_code_generator/static/qr/images/")


def generate_qr_code(request):

    if request.method == "POST":
        data = request.body
        data = json.loads(data)

        qr_code = segno.make_qr(data["text"])
        qr_code.save(
            "qr.png",
            scale=10,
            border=5,
        )

        response = {}
        with open("qr.png", "rb") as image:
            img = image.read()
            response['qr'] = base64.encodebytes(img).decode('utf-8')
            image.close()

        # os.remove("qr.png")

        print("-"*30)
        print("Qr Code Generated")
        print("-"*30)

    return JsonResponse(response, safe=False)
