from django import forms


class TodoForm(forms.Form):
    text = forms.CharField(max_length=250, label="")
