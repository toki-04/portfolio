from django.db import models

# Create your models here.


class Todo(models.Model):
    todo_text = models.CharField(max_length=250)
    is_done = models.IntegerField(default=0)
    date_created = models.DateTimeField("Date Created")

    def __str__(self):
        return self.todo_text
