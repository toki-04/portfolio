from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from django.http import HttpResponseRedirect

from django.urls import reverse

from .models import Todo
from .forms import TodoForm

import json

# Create your views here.


def index(request):
    todo = Todo.objects.all().order_by('-date_created')
    context = {
        "todo": todo,
        "form": TodoForm(),
    }

    if request.method == "POST":
        form = TodoForm(request.POST)

        if form.is_valid():
            text = form.cleaned_data["text"]
            is_done = 0
            date_created = timezone.now()

            todo = Todo(todo_text=text, is_done=is_done,
                        date_created=date_created)
            todo.save()

    return render(request, "todo/index.html", context)


def update(request, todo_id):
    print("-"*30)
    todo = get_object_or_404(Todo, id=todo_id)
    if request.method == "POST":
        data = request.body
        data = json.loads(data)

        todo.is_done = data["is_done"]
        todo.todo_text = data["todo_text"]
        todo.save()
        print(f"Todo: {todo_id} updated...")

    print("-"*30)

    return HttpResponseRedirect(reverse("todo:index"))


def remove(request, todo_id):
    print("-"*30)
    todo = get_object_or_404(Todo, id=todo_id)
    todo.delete()
    print(f"Todo: {todo_id} deleted...")

    print("-"*30)

    return HttpResponseRedirect(reverse("todo:index"))
