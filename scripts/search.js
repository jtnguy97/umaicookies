function highlight(param) {
        var ob = new Mark(document.querySelector("#text"));
        ob.unmark();
        ob.mark(
            document.getElementById("search").value,
            { className: 'a' + param }
        );
    }
