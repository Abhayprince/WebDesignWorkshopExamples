var css='div[contenteditable]{font-family: Menlo,Monaco,Consolas,"Courier New",monospace;font-size: 13px;display: block;padding: 9.5px;margin: 0 0 10px;line-height: 1.42857143;'+
'color: #333;word-break: break-all;word-wrap: break-word;background-color: #f5f5f5;border: 1px solid #ccc;border-radius: 0px;white-space: pre-wrap;';
var c = document.createElement('style');
c.setAttribute('type', 'text/css');
c.innerHTML = css;
document.body.appendChild(c);
$(function () {
    $(document).on('click','.generate-output-btn',function (e) {
        var src = $($(this).data('source'));
        var out = $($(this).data('target'));
        src.attr('contenteditable', 'false');
        var h = src.html().replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
        out.empty().append(h);
        src.attr('contenteditable', 'true');
    });

    $(document).on('click', '.run-script-btn', function (e) {
        var src = $($(this).data('source'));
        var out = $($(this).data('target'));

        src.attr('contenteditable', 'false');
        var h = src.html().replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/<br>/g, '').replace(/<br \/>/g, '').replace(/<div>/g, '').replace(/<\/div>/g, '');
        $('#run-new-script').detach().empty().remove();
        var js = document.createElement('script');
        js.id = 'run-new-script';
        
        js.innerText = h; 
        document.body.append(js);

        src.attr('contenteditable', 'true');
    });

    $(document).on('click', '.run-css-btn', function (e) {
        var src = $($(this).data('source'));
        var out = $($(this).data('target'));

        src.attr('contenteditable', 'false');
        var h = src.html().replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/<br>/g, '').replace(/<br \/>/g, '').replace(/<div>/g, '').replace(/<\/div>/g, '');
        $('#run-new-css').detach().empty().remove();
        var style = document.createElement('style');
        style.id = 'run-new-css';

        style.innerText = h;
        document.body.append(style);

        src.attr('contenteditable', 'true');
    });

    $('pre[contenteditable]:not(.newEditor)').keydown(function (e) {
        // trap the return key being pressed
        if (e.keyCode === 13) {
            // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
            document.execCommand('insertHTML', false, '<br><br>');
            // prevent the default behaviour of return key pressed
            return false;
        }
        if (e.keyCode === 9) {
            document.execCommand('insertHTML', false, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
            // prevent the default behaviour of return key pressed
            return false;
        }
    });
    $('pre[contenteditable].newEditor,div[contenteditable].newEditor').keydown(function (e) {
        // trap the return key being pressed
        if (e.keyCode === 13) {
            // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
            document.execCommand('insertHTML', false, '<br><br>');
            // prevent the default behaviour of return key pressed
            return false;
        }
        if (e.keyCode === 9) {
            document.execCommand('insertHTML', false, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
            // prevent the default behaviour of return key pressed
            return false;
        }
    });
})