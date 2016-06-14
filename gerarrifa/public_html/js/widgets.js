function initCheckbox() {
    $(".checkbox_input").change(function () {
        $(this).parent().toggleClass("is-checked");
    });

    updateCheckbox();
}

function initSwitch() {
    $(".switch_input").change(function () {
        $(this).parent().toggleClass("is-checked");
    });

    updateSwitch();
}

function initRadiobutton() {
    $(".radiobutton_input").on("change", function () {
        console.log('radiobutton changed');
        if ($(this).prop("checked")) {
            var name = $(this).attr("name");
            $("input[name='" + name + "']").parent().removeClass("is-checked");
            $(this).parent().addClass("is-checked");
        }
    });

    updateRadiobutton();
}

function initIcontoggle() {
    $(".icontoggle_input").change(function () {
        $(this).parent().toggleClass("is-checked");
    });

    updateIcontoggle();
}

function initTogglebutton() {
    /*seleção exclusiva*/
    $(".togglebutton_radio-input").on("change", function () {
        console.log('toggle button changed');
        if ($(this).prop("checked")) {
            var name = $(this).attr("name");
            $("input[name='" + name + "']").parent().removeClass("is-checked");
            $(this).parent().addClass("is-checked");
        }
    });

    /*seleção multipla*/
    $(".togglebutton_checkbox-input").change(function () {
        $(this).parent().toggleClass("is-checked");
    });

    updateTogglebutton();
}

function initDropdown() {
    $(".dropdown_options li").click(function () {
        $(this).parent().prev().html($(this).html());
        $(this).parent().find("li").each(function () {
            $(this).removeClass("is-active");
        });
        $(this).addClass("is-active");
        $(this).parent().next().attr("value", $(this).data("value"));
    });

    updateDropdown();
}
function initTextfield() {
    /*textfield*/
    $(".textfield_input").keydown(function () {
        if ($(this).val() == "") {
            $(this).parent().removeClass("is-dirty");
        } else {
            $(this).parent().addClass("is-dirty");
        }
    });
    $(".textfield_input").keyup(function () {
        if ($(this).val() == "") {
            $(this).parent().removeClass("is-dirty");
        } else {
            $(this).parent().addClass("is-dirty");
        }
    });

    $(".textfield_input").focus(function () {
        $(this).parent().addClass("is-focused");
    });
    $(".textfield_input").blur(function () {
        $(this).parent().removeClass("is-focused");
        
        if( $(this).is(':invalid')){
             $(this).parent().addClass("is-invalid");
        }else{
             $(this).parent().removeClass("is-invalid");
        }
    });
    



    /*selectfield*/
    $(".selectfield_input").focus(function () {
        $(this).parent().addClass("is-focused");
        if ($(this).html() == "") {
            $(this).parent().removeClass("is-dirty");
        } else {
            $(this).parent().addClass("is-dirty");
        }
    });
    $(".selectfield_input").blur(function () {
        $(this).parent().removeClass("is-focused");
        if ($(this).html() == "") {
            $(this).parent().removeClass("is-dirty");
        } else {
            $(this).parent().addClass("is-dirty");
        }
    });
    $(".selectfield_options li").click(function () {
        $(this).parent().prev().html($(this).html());
        $(this).parent().find("li").each(function () {
            $(this).removeClass("is-active");
        });
        $(this).addClass("is-active");
        $(this).parent().next().attr("value", $(this).data("value"));
        $(this).closest(".selectfield").addClass("is-dirty");
    });

    /*>>falta verificar required*/
    updateTextfield();
}

function initTab() {
    /*seleção exclusiva*/
    $(".tab_input").on("change", function () {
        if ($(this).prop("checked")) {
            var name = $(this).attr("name");
            var id = $(this).attr("id");
            $("input[name='" + name + "']").parent().removeClass("is-checked");
            $(this).parent().addClass("is-checked");

            $(".tab_container").each(function () {
                if ($(this).data("group") == name) {
                    $(this).removeClass("is-active");
                }
                if ($(this).data("id") == id) {
                    $(this).addClass("is-active");
                }
            });
        }
    });

    updateTab();
}

function initTable() {
    /*ordenamento das colunas*/
    $("table thead th:not(.sort--disabled)").click(function(){
        if($(this).hasClass('sort--asc')){
            $(this).removeClass('sort--asc');
            $(this).addClass('sort--des');
        }else if($(this).hasClass('sort--des')){
            $(this).removeClass('sort--des');
            $(this).addClass('sort--asc');
        }else{
            $(this).parent().find("th").removeClass('sort--asc sort--des');
            $(this).addClass('sort--asc');
        }
    });

        
    /*row selection all*/
    $(".checkbox--row-selection-all").change(function () {
        var checked = $(this).prop("checked");
        $(this).closest('table').find(".checkbox--row-selection").each(function () {
            $(this).prop("checked", checked);
        });
        updateRowSelection();
    });
    /*row selection*/
    $(".checkbox--row-selection").change(function () {
        $(this).closest("tr").toggleClass("row--selected");
    });
    
    updateTable();
}
function updateRowSelection() {
    $(".checkbox--row-selection").each(function () {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("is-checked");
             $(this).closest("tr").addClass("row--selected");
        } else {
            $(this).parent().removeClass("is-checked");
             $(this).closest("tr").removeClass("row--selected");
        }

        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
    });
}

function updateCheckbox() {
    $(".checkbox_input").each(function () {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("is-checked");
        } else {
            $(this).parent().removeClass("is-checked");
        }

        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
    });
}

function updateSwitch() {
    $(".switch_input").each(function () {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("is-checked");
        } else {
            $(this).parent().removeClass("is-checked");
        }

        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
    });
}

function updateRadiobutton() {
    $(".radiobutton_input").parent().removeClass("is-checked");
    $(".radiobutton_input").each(function () {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("is-checked");
        }
        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
    });
}

function updateIcontoggle() {
    $(".icontoggle_input").each(function () {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("is-checked");
        } else {
            $(this).parent().removeClass("is-checked");
        }

        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
    });
}

function updateTogglebutton() {
    /*seleção exclusiva*/
    $(".togglebutton_radio-input").parent().removeClass("is-checked");
    $(".togglebutton_radio-input").each(function () {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("is-checked");
        }
        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
    });

    /*seleção multipla*/
    $(".togglebutton_checkbox-input").each(function () {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("is-checked");
        } else {
            $(this).parent().removeClass("is-checked");
        }

        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
    });
}

function updateDropdown() {
    $(".dropdown .dropdown_options li").each(function () {
        if ($(this).hasClass("is-active")) {
            $(this).parent().prev().html($(this).html());
            $(this).parent().next().attr("value", $(this).data("value"));
        } else {
            //$(this).parent().removeClass("is-checked");
        }
    });
}
function updateTextfield() {
    /*textfield*/
    $(".textfield_input").each(function () {
        if ($(this).val() == "") {
            $(this).parent().removeClass("is-dirty");
        } else {
            $(this).parent().addClass("is-dirty");
        }

        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
        
        
    });



    /*selectfield*/
    $(".selectfield .selectfield_options li").each(function () {
        if ($(this).hasClass("is-active")) {
            $(this).parent().prev().html($(this).html());
            $(this).parent().next().attr("value", $(this).data("value"));
            $(this).closest(".selectfield").addClass("is-dirty");
        } else {
            //$(this).parent().removeClass("is-checked");
        }
    });
    $(".selectfield_input").each(function () {
        if ($(this).html() == "") {
            $(this).parent().removeClass("is-dirty");
        } else {
            $(this).parent().addClass("is-dirty");
        }

        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
    });

}

function updateTab() {
    /*seleção exclusiva*/
    $(".tab_input").parent().removeClass("is-checked");
    $(".tab_input").each(function () {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("is-checked");
            var name = $(this).attr("name");
            var id = $(this).attr("id");
            $(".tab_container").each(function () {
                if ($(this).data("group") == name) {
                    $(this).removeClass("is-active");
                }
                if ($(this).data("id") == id) {
                    $(this).addClass("is-active");
                }
            });
        }
        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
    });


}

function updateTable() {
    /*row selection all*/
    $(".checkbox--row-selection-all").each(function(){
        var checked = $(this).prop("checked");
        $(this).closest('table').find(".checkbox--row-selection").each(function () {
            if(checked){
                $(this).prop("checked", checked);
            }
        });
        updateRowSelection();
    });
}