$(document).ready(function () {
    $("#dangki").click(function () { 
    $("#bang").modal();});
    $("#vien").val("K16-123456789");
    $("#ten").val("Tran Anh Dung");
    $("#lop").val("DHKTPM16BTT");
    $("#so").val("0xxx-xxx-xxx");
    $("#meo").val("xxxxx@iuh.edu.vn ");


    function validatevien(){
        let vien = $("#vien").val();
        let validatevien = /^K16\-\d{9}$/;
        if (vien===""){
            $("#loivien").html("Bat buoc nhap");
            return false;
        }else{
            if(!validatevien.test(vien)){
                $("#loivien").html("bao loi");
                return false;

            }else{
                $("#loivien").html("*");
                return true;
            }
        }
            

    }
    function validateten(){
        let vien = $("#ten").val();
        let validatevien = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        if (vien===""){
            $("#loiten").html("Bat buoc nhap");
            return false;
        }else{
            if(!validatevien.test(vien)){
                $("#loiten").html("bao loi");
                return false;

            }else{
                $("#loiten").html("*");
                return true;
            }
        }
            

    }
    function validatelop(){
        let lop = $("#lop").val();
        let validatelop = /^[A-Z0-9]{11}$/;
        if (lop===""){
            $("#loilop").html("Bat buoc nhap");
            return false;
        }else{
            if(!validatelop.test(lop)){
                $("#loilop").html("bao loi");
                return false;

            }else{
                $("#loilop").html("*");
                return true;
            }
        }
            

    }
    function validateso(){
        let so = $("#so").val();
        let validateso = /^0[0-9]{3}\-[0-9]{3}\-[0-9]{3}$/;
        if (so===""){
            $("#loiso").html("Bat buoc nhap");
            return false;
        }else{
            if(!validateso.test(so)){
                $("#loiso").html("bao loi");
                return false;

            }else{
                $("#loiso").html("*");
                return true;
            }
        }
            

    }
    function validatemeo(){
        let meo = $("#meo").val();
        let validatemeo = /^0\d+\@iuh\.edu\.vn$/;
        if (meo===""){
            $("#loimeo").html("Bat buoc nhap");
            return false;
        }else{
            if(!validatemeo.test(meo)){
                $("#loimeo").html("bao loi");
                return false;

            }else{
                $("#loimeo").html("*");
                return true;
            }
        }
            

    }

function validatengay(){
    let ngay = $("#ngay").val();
   let ngayht= new Date (ngay);
   let ngayhientai =new Date();
   let sau30ngay = new Date (ngayhientai);
   sau30ngay.setDate(ngayhientai.getDate()+30);
   
    if(ngay===""){
        $("#loingay").html("Bat buoc nhap");
        return false;
    }else{
        if(ngayht<sau30ngay){
            $("#loingay").html("bao loi");
            return false;

        }else{
            $("#loingay").html("*");
            return true;
        }
        
    }
}
















let i=1
$("#vien").blur(validatevien);
$("#ten").blur(validateten);
$("#lop").blur(validatelop);
$("#so").blur(validateso);
$("#meo").blur(validatemeo);
$("#ngay").blur(validatengay);
$("#gui").click(function (e) { 
    e.preventDefault();
    let vien = $("#vien").val();
    let ten = $("#ten").val();
    let lop = $("#lop").val();
    let so = $("#so").val();
    let meo = $("#meo").val();
    let ngay = $("#ngay").val();
    let row = " <tr>  <td>"+i+"</td>  <td>"+vien+"</td>         <td>"+ten+"</td>     <td>"+lop+"</td>       <td>"+ngay+"</td>    <td>"+so+"</td>    <td>"+meo+"</td>                                                                 </tr>                               ";
    $("#than").append(row);
    i++;
});


    
});