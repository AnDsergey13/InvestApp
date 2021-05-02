    function setEqualHeight(columns)
    {
    var tallestcolumn = 0;
    var tallestpadingtop = 0;
    var tallestpadingbottom = 0;
    columns.each(
    function()
    {
        jQuery(this).css("height","auto");
        currentHeight = jQuery(this).height();
        if(currentHeight > tallestcolumn)
        {
            tallestcolumn = currentHeight;
        }
        currentPaddingTop = parseFloat(jQuery(this).css("padding-top"));
        if(currentPaddingTop > tallestpadingtop)
        {
            tallestpadingtop = currentPaddingTop;
        }
        currentPaddingBottom = parseFloat(jQuery(this).css("padding-bottom"));
        if(currentPaddingBottom > tallestpadingbottom)
        {
            tallestpadingbottom = currentPaddingBottom;
        }
    }
    );
        columns.height(tallestcolumn);
        columns.css("padding-top",tallestpadingtop+"px");
        columns.css("padding-bottom",tallestpadingbottom+"px");
    }
    jQuery(document).ready(function() {
        jQuery(window).resize(function(){
            setEqualHeight(jQuery(".main-main > div"));
            setEqualHeight(jQuery(".main-main_2 > div"));
            setEqualHeight(jQuery(".row_prodvigenie_main > div"));
            setEqualHeight(jQuery(".row_osobennosti_prod_main > div"));
            setEqualHeight(jQuery(".row_opisanie_prod_main > div"));
            setEqualHeight(jQuery(".row_opisanie_prod_main_2 > div"));
            setEqualHeight(jQuery(".row_opisanie_prod_main_3 > div"));
        });
        jQuery(window).resize();
        jQuery( window ).load(function() {
          jQuery(window).resize();
        });
    });