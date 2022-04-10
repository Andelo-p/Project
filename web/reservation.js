
/*--- First row of tables---*/
function table1_1(){
    let table1__1 = "Row 1 table No. 1";
    let table1__1val= 200;
    let table1__1Id=document.getElementById("table1-1");
    table1__1Id.innerHTML=" "
    selection(table1__1,table1__1val,table1__1Id)
}
function table1_2(){
    let table1__2 = "Row 1 table No. 2";
    let table1__2val= 200;
    let table1__2Id=document.getElementById("table1-2");
    table1__2Id.innerHTML=" "
    selection(table1__2,table1__2val,table1__2Id)
}
function table1_3(){
    let table1__3 = "Row 1 table No. 3";
    let table1__3val= 200;
    let table1__3Id=document.getElementById("table1-3");
    table1__3Id.innerHTML=" "
    selection(table1__3,table1__3val,table1__3Id)
}
function table1_4(){
    let table1__4 = "Row 1 table No. 4";
    let table1__4val= 200;
    let table1__4Id=document.getElementById("table1-4");
    table1__4Id.innerHTML=" "
    selection(table1__4,table1__4val,table1__4Id)
}
function table1_5(){
    let table1__5 = "Row 1 table No. 5";
    let table1__5val= 200;
    let table1__5Id=document.getElementById("table1-5");
    table1__5Id.innerHTML=" "
    selection(table1__5,table1__5val,table1__5Id)
}
function table1_6(){
    let table1__6 = "Row 1 table No. 6";
    let table1__6val= 200;
    let table1__6Id=document.getElementById("table1-6");
    table1__6Id.innerHTML=" "
    selection(table1__6,table1__6val,table1__6Id)
}
function table1_7(){
    let table1__7 = "Row 1 table No. 7";
    let table1__7val= 200;
    let table1__7Id=document.getElementById("table1-7");
    table1__7Id.innerHTML=" "
    selection(table1__7,table1__7val,table1__7Id)
}
/*---Second row of tables---*/
function table2_1(){
    let table2__1 = "Row 2 table No. 1";
    let table2__1val= 230;
    let table2__1Id=document.getElementById("table2-1");
    table2__1Id.innerHTML=" "
    selection(table2__1,table2__1val,table2__1Id)
}
function table2_2(){
    let table2__2 = "Row 2 table No. 2";
    let table2__2val= 230;
    let table2__2Id=document.getElementById("table2-2");
    table2__2Id.innerHTML=" "
    selection(table2__2,table2__2val,table2__2Id)
}
function table2_3(){
    let table2__3 = "Row 2 table No. 3";
    let table2__3val= 230;
    let table2__3Id=document.getElementById("table2-3");
    table2__3Id.innerHTML=" "
    selection(table2__3,table2__3val,table2__3Id)
}
function table2_4(){
    let table2__4 = "Row 2 table No. 4";
    let table2__4val= 230;
    let table2__4Id=document.getElementById("table2-4");
    table2__4Id.innerHTML=" "
    selection(table2__4,table2__4val,table2__4Id)
}
function table2_5(){
    let table2__5 = "Row 2 table No. 5";
    let table2__5val= 230;
    let table2__5Id=document.getElementById("table2-5");
    table2__5Id.innerHTML=" "
    selection(table2__5,table2__5val,table2__5Id)
}
function table1_6(){
    let table2__6 = "Row 2 table No. 6";
    let table2__6val= 230;
    let table2__6Id=document.getElementById("table2-6");
    table2__6Id.innerHTML=" "
    selection(table2__6,table2__6val,table2__6Id)
}
function table2_7(){
    let table2__7 = "Row 2 table No. 7";
    let table2__7val= 230;
    let table2__7Id=document.getElementById("table2-7");
    table2__7Id.innerHTML=" "
    selection(table2__7,table2__7val,table2__7Id)
}

/*---Selection---*/
function selection(tablePosistion,tableVal,tableId) {
    document.getElementById("detailsselection").style.display="block";
    document.getElementById("groundplan").style.display="none"

    tableposistion = tablePosistion;
    tableval = tableVal;
    tableid = tableId;

    let tablename = document.getElementById("selectiontablename");
    let tableprize=document.getElementById("selectiontableprice");
    let numOfpeople=document.getElementById("selectionofpeople").value;

    tablename.value=tableposistion;
    tableprize.value=tableval + " kn";

}
/*---People on table */
function peopleOnTable(numOfPP){
    num = numOfPP;
    let pricepp = 30;
    let totalprice = num * pricepp;
    document.getElementById("selectionpeopleprice").value=totalprice + " kn";
}