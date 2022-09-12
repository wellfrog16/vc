const mini = {
    toolbar: 'bold | alignleft aligncenter alignright alignjustify | bullist numlist | forecolor | fullscreen',
    menubar: false,
    plugins: 'lists fullscreen',
}

const simple = {
    toolbar: 'undo redo | formatselect | bold | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | forecolor backcolor | removeformat | link image table | uploadImage | preview | fullscreen',
    menubar: false,
    plugins: 'lists fullscreen link image preview table imagetools',
}

const standard = {
    toolbar: 'formatselect | bold | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | forecolor backcolor | removeformat | link image | preview',
    menubar: true,
    plugins: 'lists link image preview table imagetools fullscreen',
}

const full = {
    toolbar: 'formatselect | code | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment',
    menubar: true,
    plugins: 'code print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help',
    // plugins: 'code print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount tinymcespellchecker a11ychecker imagetools textpattern help formatpainter permanentpen pageembed tinycomments mentions linkchecker',
    image_advtab: true,
    image_caption: true,
}

export default {
    mini,
    simple,
    standard,
    full,
}
