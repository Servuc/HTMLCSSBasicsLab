$(document).ready(function()
{
    $(".choice-adding > * input[required]").attr("disabled", "disabled");
    $("#myForm_label_type").change(function()
    {
        $(".choice-adding:visible > * input[required]").attr("disabled", "disabled");
        $(".choice-adding:visible").slideToggle();
        var tabData = $(this).find(":selected").attr("data-div").split(",")
        for(var cpt = 0; cpt < tabData.length; cpt++)
        {
            $("#" + tabData[cpt]).slideToggle();
            $("#" + tabData[cpt] + " > * input[disabled]").removeAttr("disabled");
        }
    });
/*
    $("input[dropzone]").on('drop', function(event)
    {
        event.preventDefault();

        var dt = event.dataTransfer;
        var files = dt.files;

        showThumbnail(files)
    });

    function showThumbnail(files)
    {
        for(var i=0;i<files.length;i++)
        {
            var file = files[i]
            var imageType = /image.*/
            /*if(!file.type.match(imageType))
                continue;

            var reader = new FileReader()
            reader.onload = (function(aImg)
            {
                return function(e)
                {
                    $("#myForm_photosArea").append('<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><img src="' + e.target.result + '"></div>');
                };
            }(image));
        }
    }
    */
});
