const formElement = document.getElementById('form');
    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const url = formData.get('url');
        const text = formData.get('text');   
        var cb = [];
        var list_checkbox = document.querySelectorAll('input[type="checkbox"]');
        for (var i = 0, k = list_checkbox.length; i < k; i++)
        if (list_checkbox[i].checked) cb.push (document.querySelector('label[for=' + list_checkbox[i].id + ']').innerText);
        if ($('.error-message').css.display = 'none') {
            console.log(name, url, text);
            if (cb.length) console.log(cb.join (', '));
        }
 });
