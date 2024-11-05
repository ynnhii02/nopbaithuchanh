$(document).ready(function () {
    let i=2;
 function validatema(){
    let ma = $("#ma").val();
    let validatema =/^\d{9}$/;
    if (ma===""){
        $("#loima").html("bat buoc nhap");
        return false;
    }else{
        if(!validatema.test(ma)){
            $("#loima").html("nhap sai");
            return false;
        }else{
            $("#loima").html("(*)");
            return true;
        }
    }
 }



 function validateten(){
    let ten = $("#ten").val();
    let validateten =/^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
    if (ten===""){
        $("#loiten").html("bat buoc nhap");
        return false;
    }else{
        if(!validateten.test(ten)){
            $("#loiten").html("nhap sai");
            return false;
        }else{
            $("#loiten").html("(*)");
            return true;
        }
    }
 }

function validatengay (){
let ngay = $("#ngay").val();
let ngayht= new Date (ngay);
let ngayhientai = new Date ();
let sau18nam = new Date (ngayhientai);
sau18nam.setFullYear(ngayhientai.getFullYear() - 18)

if (ngay===""){
    $("#loingay").html("bat buoc nhap");
    return false;
}else{
    if(ngayht>sau18nam){
        $("#loingay").html("ngay vao cong ty phai truoc  18 nam");
        return false;
    }else{
        $("#loingay").html("(*)");
        return true;
    }
}
}

$("#bac").change(function (e) { 
 let bac = $("#bac").val();

    $("#he").val(bac);
    
});


 $("#ma").blur(validatema);
 $("#ten").blur(validateten);
 $("#ngay").blur(validatengay);
 



$("#them").click(function (e) { 
    e.preventDefault();
    let ma= $("#ma").val();
    let ten= $("#ten").val();
    let ngay= $("#ngay").val();
    let he= $("#he").val();
    let chuc= $("#chuc:checked").val();


    let row=
    "<tr>   <td>"+ i+" </td>          <td>"+ ma+" </td>     <td>"+ ten+" </td>   <td>"+ ngay+" </td>       <td>"+ chuc+" </td>           <td>"+ he+" </td>  </tr>";
$("#than").append(row);
i++;
});
});