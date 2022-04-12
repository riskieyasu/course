$(document).ready(function() {             
    $('#loginModal').modal('hide');
 
});

var r = 0;


(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 492) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

function token(){


    let url = 'http://127.0.0.1:5000/tokenauth';
    
    let headers = new Headers();
    let jwt_token = getCookie("token");
    //headers.append('Content-Type', 'text/json');
    headers.set('x-access-token', jwt_token);
    
    fetch(url, {method:'POST',
            headers: headers,
            //credentials: 'user:passwd'
           })
    .then(response => response.text())
    .then(json => redirect(json));
    
        }
        function redirect(jwt){
            var mp = document.getElementById("mp");
            var lgo = document.getElementById("lgo");
            var lgi = document.getElementById("lgi");
            var reg = document.getElementById("reg");
            if (jwt=="Unauthorized Access!"){
              
              mp.style.display="none";
              lgo.style.display="none";
              lgi.style.display="";
              reg.style.display="";
            }
            else {
               
                 mp.style.display="";
                lgo.style.display="";
                lgi.style.display="none";
                reg.style.display="none";
        }

    }
token();
         
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  } 


  function logout()
  {  
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; sameSite=Lax;   ";
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; sameSite=Lax;   ";
    document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; sameSite=Lax;   ";
    window.location.href = "/"
  }  


 function tes() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  function tes_2() {
    var modal = document.getElementById("myModal_2");
    modal.style.display = "block";
  }
 
  function myprofile() {
    var modal = document.getElementById("myModal_3");
    modal.style.display = "block";
  }
  function ucourse() {
    var modal = document.getElementById("myModal_7");
    modal.style.display = "block";
  }
  function closecupload(){
    var modal_7 = document.getElementById("myModal_7");
    modal_7.style.display = "none";
  }
  function closemodal() {
    var modal = document.getElementById("myModal");
    var modal_2 = document.getElementById("myModal_2");
    var modal_3 = document.getElementById("myModal_3");
    var modal_4 = document.getElementById("myModal_4");
    modal.style.display = "none";
    modal_2.style.display = "none";
    modal_3.style.display = "none";
    modal_4.style.display = "none";
    var nama = getCookie("username");
    $("#datanama").empty().append("<h3 style='color:black'>"+nama+"</h3>");
    angka = 1;
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    parseJwt(a);
    var modal = document.getElementById("myModal");
    var modal_2 = document.getElementById("myModal_2");
    var modal_3 = document.getElementById("myModal_3");
    var modal_4 = document.getElementById("myModal_4");
    var modal_7 = document.getElementById("myModal_7");
    if (event.target == modal) {
      modal.style.display = "none";
    }
    else if (event.target == modal_2) {
        modal_2.style.display = "none";
      }
      else if (event.target == modal_3) {
        modal_3.style.display = "none";
        var nama = getCookie("username");
    $("#datanama").empty().append("<h3 style='color:black'>"+nama+"</h3>");
    angka = 1;
      }
      else if (event.target == modal_4) {
        modal_4.style.display = "none";
      }
       else if (event.target == modal_7) {
        modal_7.style.display = "none";
      }
      
  }
function delete_course(id){
  c_id = id;
  var token = getCookie('token');
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  data = JSON.parse(jsonPayload);
  id = $("#ci" + a).text();
  Object.keys(data).forEach(key => {
    if (key=="passkey"){
      delete_2(data['user'],data['passkey'],c_id);
    }
  });
}
function delete_2(a,b,id){
  var a_1 = a;
  var b_1 = b;
  a_id = id;
  let url = 'http://127.0.0.1:5000/delet/'+id+'';
     
    let headers = new Headers();
      
      //headers.append('Content-Type', 'text/json');
    headers.set('Authorization', 'Basic ' +  btoa(a + ":" + b));
      
      fetch(url, {method:'DELETE',
              headers: headers,
              credentials: 'include'
             })
      .then(response => response.json())
      .then(json => delete_3(a_1,b_1,a_id));
}
function delete_3(a,b,c){
  
  let url = 'http://127.0.0.1:5000/deletecourse/'+c+'';
     
    let headers = new Headers();
      
      //headers.append('Content-Type', 'text/json');
    headers.set('Authorization', 'Basic ' +  btoa(a + ":" + b));
      
      fetch(url, {method:'DELETE',
              headers: headers,
              credentials: 'include'
             })
      .then(response => response.json())
      .then(json => delete_4(json));


}


function delete_4(data){
  parseJwt(a);
  topiclist();
}
  function seven(){
    const username = document.getElementById('inputUsername').value;
    const password = document.querySelector("#inputPassword");
    
  
    let url = 'http://127.0.0.1:5000/login';
     
    let headers = new Headers();
      
      //headers.append('Content-Type', 'text/json');
    headers.set('Authorization', 'Basic ' +  btoa(username + ":" + password.value));
      
      fetch(url, {method:'POST',
              headers: headers,
              credentials: 'include'
             })
      .then(response => response.text())
      .then(json => bridge(json));
      
          }
      function bridge(h){
  
            if (h =='token generated'){
              console.log(h);
              window.location.href = "/"
             
            }
            else{
                  alert("wrong credentials");
            }
        }

        function reg(){

            const username_ = document.getElementById('inputUsername2').value;
            const password_ = document.querySelector("#inputPassword2");
            const role_ = document.querySelector('input[name="role"]:checked').value;
            let urla = 'http://127.0.0.1:5000/daftar';
           
        
           data = {
             name: username_,
             role : role_,
             passkey: password_.value,
             
           }
            
            fetch(urla, {method:'POST',
                    headers:{'Content-Type': 'application/json',},
                    credentials: 'include',
                    body: JSON.stringify(data)
                   })
            .then(response => response.json())
            .then(json => g(json));
            
                }
              
                
                function g(h){
                  var success= 0;
                    for (i in h){
                      if (i=="success"){
                        success += 1;
                      }
                    }
                    if (success==1){
                      alert('Anda Terdaftar!');
                    }
                    if (success==0){
                      alert('Sudah ada username!');
                    }
    
                
                  window.location.href = "/"
              }
              const target = {
                clicked: 0,
                currentFollowers: 90,
                btn: document.querySelector("a.btn"),
                fw: document.querySelector("span.followers")
              };
              
              const follow = () => {
                target.clicked += 1;
                target.btn.innerHTML = 'Following <i class="fas fa-user-times"></i>';
              
                if (target.clicked % 2 === 0) {
                  target.currentFollowers -= 1;
                  target.btn.innerHTML = 'Follow <i class="fas fa-user-plus"></i>';
                }
                else {
                  target.currentFollowers += 1;
                }
              
                target.fw.textContent = target.currentFollowers;
                target.btn.classList.toggle("following");
              }
function fe(){
  var modal_3 = document.getElementById("myModal_3");
  modal_3.style.display='block';
}

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  data = JSON.parse(jsonPayload);
  
  Object.keys(data).forEach(key => {
    if (key=="passkey"){
    newf(data['user'],data['passkey']);
    }
  });
//   Object.values(data).forEach(value => {
//     if (value=="Denda"){
//       newf(data['user'],data['passkey']);
      
//     }
//  }); 
  
}

var a = getCookie("token");
parseJwt(a);

function newf(us,pw) {

let url = 'http://127.0.0.1:5000/courses';
     
    let headers = new Headers();
      
      //headers.append('Content-Type', 'text/json');
    headers.set('Authorization', 'Basic ' +  btoa(us + ":" + pw));
      
      fetch(url, {method:'GET',
              headers: headers,
              credentials: 'include'
             })
      .then(response => response.text())
      .then(json => fetchuserdata(json));
      
          
}
function fetchuserdata(data){
var role_='student';
var obj = JSON.parse(data);
id = obj.b_student_id;
role = obj.c_role;
if (role=='user'){
role=role_;
}
var nama = getCookie("username");
$("#datanama").empty().append("<h3 style='color:black'>"+nama+"</h3>");
$("#dataid").empty().append("<p style='text-align:center;color:black' class='mb-0'><strong class='pr-1'>"+role+" ID : </strong>"+id+"</p>");
Object.keys(obj).forEach(key => {
  // html += "<tr><td>"+ value["</td><td>Item</td><td>Item</td><td>Item</td></tr>" ;
  if (key=="b_student_id"){
  let courses = obj['d_courses'];
  let role = obj['c_role'];
  if (role=='user'){
  courses_f(courses,role);
  }
  else{
    teacher();
    html = '<button id ="upload" style="color:black; margin-top:-30px; margin-left:490px; width:40%;text-decoration:none; font-weight: normal;  line-height: 2.2;" href="#" class="submit" onclick="ucourse()"><p style="font-size:16px;">Upload Course</p></button>'
    $("#upld").empty().append(html);
    // alert("cek");
  }
  }
}); 
}
function courses_f(c,r){
  let html = "";
  Object.values(c).forEach(value => {
    if (value['status'] ==  'Enrolled' && r=='user'){
    html += "<tr ><td id = 'ci"+value['course_id']+"'>"+ value['course_id'] + "</td><td id = 'ct"+value['course_id']+"'>"+ value['course_title'] + "</td><td>"+ value['status'] + "</td><td><a href='#'><i onclick='cancel("+value['course_id']+")' class='fas fa-ban'></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style='color:green' href='#'><i id ='complete' onclick='chapter("+value['course_id']+")' class='fas fa-check'></i></a></td></tr>" ;
    }
    if (value['status'] ==  'Completed'  && r=='user'){
      html += "<tr ><td id = 'ci"+value['course_id']+"'>"+ value['course_id'] + "</td><td id = 'ct"+value['course_id']+"'>"+ value['course_title'] + "</td><td>"+ value['status'] + "</td><td><a href='#' style='color:black; font-size:20px; margin-left:18px;'>-</a></td></tr>" ;
      }
  });
  $("#tbody").empty().append(html);

}

function teacher(){
var token = getCookie("token");
var base64Url = token.split('.')[1];
var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
}).join(''));
data = JSON.parse(jsonPayload);

Object.keys(data).forEach(key => {
  if (key=="passkey"){
  teacher_2(data['user'],data['passkey']);
  }
});
function teacher_2(us,pw){
  let url = 'http://127.0.0.1:5000/teachercourse';
     
    let headers = new Headers();
      
      //headers.append('Content-Type', 'text/json');
    headers.set('Authorization', 'Basic ' +  btoa(us + ":" + pw));
      
      fetch(url, {method:'GET',
              headers: headers,
              credentials: 'include'
             })
      .then(response => response.json())
      .then(json => teacher_3(json));
}
}
function teacher_3(data){

  let html = "";
  let html_ = "";
  let html__ = "";
  html_ = "<tr><th>Id</th><th>Course</th><th>Students</th><th>Action</th></tr>"
  html__ = "<h3 style='color:black' class='mb-0'><i class='far fa-clone pr-1'></i> Courses Uploaded</h3>"
  Object.values(data).forEach(value => {
    
    html += "<tr ><td id = 'ci"+value['course_id']+"'>"+ value['course_id'] + "</td><td>"+ value['course_name'] + "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ value['total_students'] + "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='#'><i onclick='delete_course("+value['course_id']+")' class='fas fa-ban'></i></a></td></tr>" ;
    
   
  });
  $("#tbody").empty().append(html);
  $("#thead").empty().append(html_);
  $("#title_").empty().append(html__);


}

var angka = 1;
function update(){

var nama = getCookie("username");
html = "<input id='nama' style='color:black; font-size:14px; width:90%;' value='" + nama + "'></input>";
var token = getCookie("token");
var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  data = JSON.parse(jsonPayload);
  
  Object.keys(data).forEach(key => {
    if (key=="passkey"){
    var user =data['user'];
      var passkey = data['passkey'];
      update_2(user,passkey);
    }
  });
//   Object.values(data).forEach(value => {
//     if (value=="Denda"){
//       var user =data['user'];
//       var passkey = data['passkey'];
//       update_2(user,passkey);
//     }
//  }); 
 function update_2(us,pw){
if (angka%2!=0){
$("#datanama").empty().append(html);
angka=2;
console.log(us,pw),angka;
}
else if (angka%2==0){
  let nama = $("#nama").val();
  let urla = 'http://127.0.0.1:5000/user';
 
  data = {
    name: nama,
  }
   
   fetch(urla, {method:'PUT',
           headers:{'Authorization': 'Basic ' +  btoa(us + ":" + pw),
            'Content-Type': 'application/json'
  
          },
           credentials: 'include',
           body: JSON.stringify(data)
          })
   .then(response => response.json())
   .then(json => console.log(json));
  angka=1;
  alert("updated");
  console.log(angka);
  let url = 'http://127.0.0.1:5000/login';
     
    let headers = new Headers();
      
      //headers.append('Content-Type', 'text/json');
    headers.set('Authorization', 'Basic ' +  btoa(nama + ":" + pw));
      
      fetch(url, {method:'POST',
              headers: headers,
              credentials: 'include'
             })
      .then(response => response.text())
      .then(data => label(data));
}
 }
}
function label(a){
  b = getCookie('username');
  
  $("#datanama").empty().append("<h3 style='color:black'>"+b+"</h3>");
  angka = 1;
  
}
function alerta(){
  alert('tes');
}
function fetchtopic(topic){
  let html = "";
  number = 0;
  Object.values(topic).forEach(value => {
  number += 1;
  let nama = value['Topic']['name'];
  let t_cours = value['Topic']['total_courses'];
html+= "<div class='col-lg-3 col-md-6 mb-4'><div class='cat-item position-relative overflow-hidden rounded mb-2'><img class='img-fluid' src='img/id" + number + ".jpg' alt=''><a class='cat-overlay text-white text-decoration-none' href='#topic' onclick='tes_3("+number+")'><h4 class='text-white font-weight-medium' id='"+number+"'>"+nama+"</h4><span style='margin-left:-20px'>"+t_cours+"&nbsp;Courses"+"</span></a></div></div>"

  }); 
$("#topiclist").empty().append(html);
}

function tes_3(name) {
  var topic_n= $("#" + name).text()
 let url = 'http://127.0.0.1:5000/searchcourse';
    
   let headers = new Headers();
   data = {
     topic: topic_n,
   }
     headers.append('Content-Type', 'application/json');
   // headers.set('Authorization', 'Basic ' +  btoa(us + ":" + pw));
     
     fetch(url, {method:'POST',
             headers: headers,
             body: JSON.stringify(data),
             credentials: 'include',
            })
     .then(response => response.json())
     .then(json => fetchcourse_1(json));
     
}
function topiclist(){
  let url = 'http://127.0.0.1:5000/topiclist';
     
    let headers = new Headers();
      
      headers.append('Content-Type', 'text/json');
    // headers.set('Authorization', 'Basic ' +  btoa(us + ":" + pw));
      
      fetch(url, {method:'GET',
              headers: headers,
              credentials: 'include'
             })
      .then(response => response.json())
      .then(json => fetchtopic(json))
      .catch((error) => {
        window.location.href = "404.html";
      });
      
          
}

function fetchcourse_1(topic){
  var number = 0;
  let title="";
  Object.values(topic).forEach(value => {
    title = "<h1 style='color:black; text-align:center;'>"+value['1_name']+"</h1>"
    fetchcourse_2(value['3_courses']);
    
  });
  $("#topictitle").empty().append(title);
}
function fetchcourse_2(course){
  let html="";
  
  
  Object.values(course).forEach(value => {
    

    html += "<div class='card'><img src='img/id" + value['4_topic_id'] + ".jpg' alt='Vintage Camera'><h2 id = 'c"+value['1_id']+"'>"+value['2_nama']+"</h2><p>"+value['3_description']+"</p><button class='btnn' onclick=preq("+value['1_id']+")>Prerequisites</button><button class='btnn' onclick=enroll_1("  + value['1_id']  +")>Enroll</button></div>"
    
    
  });
  $("#courselist").empty().append(html);
  
  var modal_4 = document.getElementById("myModal_4");
    modal_4.style.display = "block";
}
function preq(id){
  let url = 'http://127.0.0.1:5000/getprerequisite/'+ id;
    
   let headers = new Headers();
   
    //  headers.append('Content-Type', 'application/json');
   // headers.set('Authorization', 'Basic ' +  btoa(us + ":" + pw));
     
     fetch(url, {method:'GET',
            //  headers: headers,
             credentials: 'include',
            })
     .then(response => response.json())
     .then(json => fetchpreq(json));
}
function fetchpreq(data){
  let html ="";
  let number = 0;
  Object.values(data).forEach(value => {
    number += 1;
   html += "<br><h2 style='color:black'>Prerequisite "+ number +" : </h2><h4 style='color:black'> "+value['name']+"</h4>"
  });
  $("#preqs").empty().append(html);
  var modal = document.getElementById("myModal_5");
    modal.style.display = "block";
    var modal4 = document.getElementById("myModal_4");
    modal4.style.display = "none";
}

function back(){
  var modal = document.getElementById("myModal_4");
    modal.style.display = "block";
    var modal4 = document.getElementById("myModal_5");
    modal4.style.display = "none";
}

function back_2(){
  var modal = document.getElementById("myModal_3");
    modal.style.display = "block";
    var modal4 = document.getElementById("myModal_6");
    modal4.style.display = "none";
    // parseJwt(a);
    $("#a1").empty().append('<button class="btna" onclick="completed(1)">Complete</button>');
    $("#a2").empty().append('<button class="btna" onclick="completed(2)">Complete</button>');
    $("#a3").empty().append('<button class="btna" onclick="completed(3)">Complete</button>');
    
}
function topcourse(){
  let url = 'http://127.0.0.1:5000/topcourse';
     
    let headers = new Headers();
      
      headers.append('Content-Type', 'text/json');
    // headers.set('Authorization', 'Basic ' +  btoa(us + ":" + pw));
      
      fetch(url, {method:'GET',
              headers: headers,
              credentials: 'include'
             })
      .then(response => response.json())
      .then(json => fetchtopcourse(json));
      
          
}

function fetchtopcourse(data){
  let html ="";
 
  Object.values(data).forEach(value => {
    
   html += "<div class='col-md-4  mb-4'> <div class='col-md-11'><div class='rounded overflow-hidden mb-2'><img class='img-fluid' src='img/id"+ value['topic_id'] +".jpg' alt=''><div class='bg-secondary p-4'><div class='d-flex justify-content-between mb-3'><small class='m-0' style='font-size:15px;'><i class='fa fa-users text-primary mr-2'></i>"+value['c_students']+" Students</small><small class='m-0' style='font-size:15px;'></i>#"+value['a_Rank']+"</small></div><a class='h4' href=''>"+value['b_course_name']+"</a><div class='border-top mt-4 pt-4'><a class='h5' href=''>"+value['desc']+"</a></div></div></div></div></div>"
  });
  $("#topcourse").empty().append(html);
}

topcourse();

function enroll_1(a){
  var token = getCookie('token');
  if (token==""){
    document.getElementById("myModal_4").style.display="none";
    document.getElementById("myModal").style.display="block";
  }
  else{
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  data = JSON.parse(jsonPayload);
  nama = $("#c" + a).text();
  Object.keys(data).forEach(key => {
    if (key=="passkey"){
      enroll_2(data['user'],data['passkey'],nama);
    }
  });
}
}
function enroll_2(us,pw,title){
  let urla = 'http://127.0.0.1:5000/enroll';
 
  data = {
    title: title,
  }
  let text = "Are You Sure?\nEither OK or Cancel.";
  if (confirm(text) == false) {
   window.location.href ='/'
  } else {
    text = "You canceled!";
  
   fetch(urla, {method:'POST',
           headers:{'Authorization': 'Basic ' +  btoa(us + ":" + pw),
            'Content-Type': 'application/json'
  
          },
           credentials: 'include',
           body: JSON.stringify(data)
          })
   .then(response => response.json())
   .then(json => enroll_3(json));
        }
}
function enroll_3(info){
  
  Object.keys(info).forEach(key => {
    if (key=="message"){
      alert(info['message']);
    }
  });
  parseJwt(a);
}

$("#coursehall").load("single.html #single"); 

function cancel(a){
  var token = getCookie('token');
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  data = JSON.parse(jsonPayload);
  var id = $("#ci" + a).text();
  var ttl = $("#ct" + a).text();
  let uname = getCookie('username');
  window.localStorage.removeItem(ttl+uname);
  window.localStorage.removeItem(ttl+uname+'2');
  
  Object.keys(data).forEach(key => {
    if (key=="passkey"){
      cancel_2(data['user'],data['passkey'],id);
    }
  });
}
function cancel_2(us,pw,title){
  let urla = 'http://127.0.0.1:5000/cancel/'+title+'';
 
 
   alert("are you sure?");
   fetch(urla, {method:'DELETE',
           headers:{'Authorization': 'Basic ' +  btoa(us + ":" + pw),
            'Content-Type': 'text/json'
  
          },
           credentials: 'include',
           
          })
   .then(response => response.json())
   .then(json => cancel_3(json));
}
function cancel_3(info){
  for (i in info){
    if (i == 'message'){
      alert(info['message']);
      // window.location.href ='index';
      parseJwt(a);
    }
  }
}

function chapter(id){
  document.getElementById("myModal_3").style.display ="none";
  document.getElementById("myModal_6").style.display ="block";
  let url = 'http://127.0.0.1:5000/searchcourse';
    
   let headers = new Headers();
   data = {
     id: id,
   }
     headers.append('Content-Type', 'application/json');
   // headers.set('Authorization', 'Basic ' +  btoa(us + ":" + pw));
     
     fetch(url, {method:'POST',
             headers: headers,
             body: JSON.stringify(data),
             credentials: 'include',
            })
     .then(response => response.text())
     .then(json => chapter_2(json,id));
}

function chapter_2(title,c_id){
  
  $(".name").text(title);
  var uname = getCookie('username');
  var comp = window.localStorage.getItem(title+ uname);
  var comp_uname = window.localStorage.getItem(title+ uname +'2');
  
  var judul = title + 1;
  
  if (comp == 1 && uname == comp_uname){
    // console.log('tes');
    $("#a1").empty().append('<button  class="btna-completed">Completed!</button>');
  }
  else if (comp == 2 && uname == comp_uname){
    // console.log('tes');
    $("#a1").empty().append('<button  class="btna-completed">Completed!</button>');
    $("#a2").empty().append('<button  class="btna-completed">Completed!</button>');
  }
  else if (comp == 3 && uname == comp_uname){
    // console.log('tes');
    $("#a1").empty().append('<button  class="btna-completed">Completed!</button>');
    $("#a2").empty().append('<button  class="btna-completed">Completed!</button>');
    $("#a3").empty().append('<button  class="btna-completed">Completed!</button>');
    $("#complete_1").empty().append('<button class="btn" onclick="complete('+c_id+')" style="width:200%; color:green;">Pass the course</button>');
  }
  else{
    $("#a1").empty().append('<button class="btna" onclick="completed(1)">Complete</button>');
    $("#a2").empty().append('<button class="btna" onclick="completed(2)">Complete</button>');
    $("#a3").empty().append('<button class="btna" onclick="completed(3)">Complete</button>');
    $("#complete_1").empty();
    
  }
}


function complete(a){
  var token = getCookie('token');
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  data = JSON.parse(jsonPayload);
  id = $("#ci" + a).text();
  Object.keys(data).forEach(key => {
    if (key=="passkey"){
      complete_2(data['user'],data['passkey'],id);
    }
  });
}

function complete_2(us,pw,c_id){
  let urla = 'http://127.0.0.1:5000/pass/'+c_id+'';
 
 
   alert("are you sure?");
   fetch(urla, {method:'PUT',
           headers:{'Authorization': 'Basic ' +  btoa(us + ":" + pw),
            'Content-Type': 'text/json'
  
          },
           credentials: 'include',
           
          })
   .then(response => response.json())
   .then(json => complete_3(json));
}
function complete_3(info){
  for (i in info){
    if (i == 'message'){
      alert(info['message']);
      document.getElementById("myModal_6").style.display ="none";
      parseJwt(a);
    }
  }
}

// var window.iAmGlobal = "some val"; 

function search_(){
 
  // alert(r); 
  if(r==0){
  var x = document.getElementById("formsearch");
  x.style.display="block";
  r=1
  }
  else if(r==1) {
  var y = document.getElementById("formsearch");
  y.style.display="none";

  r=0;
  }
 
  // alert("tes");
}

function search_2(){
  var x = document.getElementById("searchbox").value;
 let url = 'http://127.0.0.1:5000/searchcourse';
    
   let headers = new Headers();
   data = {
     name: x,
   }
     headers.append('Content-Type', 'application/json');
   // headers.set('Authorization', 'Basic ' +  btoa(us + ":" + pw));
     
     fetch(url, {method:'POST',
             headers: headers,
             body: JSON.stringify(data),
             credentials: 'include',
            })
     .then(response => response.json())
     .then(json => fetchsearch(json));
}
function fetchsearch(data){
let html="";
  
  
Object.values(data).forEach(value => {
  
// console.log(value);
  html += "<div class='card'><img src='img/id" + value['3_topic_id'] + ".jpg' alt='Vintage Camera'><h2 id = 'c"+value['4_id']+"'>"+value['1_name']+"</h2><p>"+value['2_description']+"</p><button class='btnn' onclick=preq("+value['4_id']+")>Prerequisites</button><button class='btnn' onclick=enroll_1("  + value['1_id']  +")>Enroll</button></div>"
  
  
});
$("#courselist").empty().append(html);

var modal_4 = document.getElementById("myModal_4");
  modal_4.style.display = "block";


}

function completed(id){
  var f = document.getElementById("cname");
  var uname = getCookie("username");
  var getdata =  window.localStorage.getItem(f.textContent + uname);
  if(id==1){
    $("#a1").empty().append('<button  class="btna-completed">Completed!</button>');
    window.localStorage.setItem(f.textContent + uname,1);
    window.localStorage.setItem(f.textContent + uname+ '2',uname);
    
  }
  else if(id==2){
    
    if (getdata == 1){
    $("#a2").empty().append('<button  class="btna-completed">Completed!</button>');
    window.localStorage.setItem(f.textContent + uname,2);
    }
    else{
      alert("complete previous chapter first!");
    }
  }
  else if(id==3){
    if (getdata == 2){
    $("#a3").empty().append('<button  class="btna-completed">Completed!</button>');
    window.localStorage.setItem(f.textContent + uname,3);
    fetchbutton(f.textContent);
  }
  else{
    alert("complete previous chapter first!");
  }
    // $("#complete_1").empty().append('<button class="btn" onclick="complete('+c_id+')" style="width:200%; color:green;">Pass the course</button>');
  }
 
}

function fetchbutton(name_){
  let url = 'http://127.0.0.1:5000/searchcourse';
    
   let headers = new Headers();
   data = {
     name: name_,
   }
     headers.append('Content-Type', 'application/json');
   // headers.set('Authorization', 'Basic ' +  btoa(us + ":" + pw));
     
     fetch(url, {method:'POST',
             headers: headers,
             body: JSON.stringify(data),
             credentials: 'include',
            })
     .then(response => response.json())
     .then(json => fetchbutton_2(json));
}
function fetchbutton_2(data){
  // console.log(data[0]);
  Object.values(data[0]).forEach(value => {
    fetchbutton_3(data[0]['4_id']);
  });
}

function fetchbutton_3(c_id){
  $("#complete_1").empty().append('<button class="btn" onclick="complete('+c_id+')" style="width:200%; color:green;">Pass the course</button>');
}


function fetchtopstudents(){

  let url = 'http://127.0.0.1:5000/topstudent';
     
    let headers = new Headers();
      
      headers.append('Content-Type', 'text/json');
    // headers.set('Authorization', 'Basic ' +  btoa(us + ":" + pw));
      
      fetch(url, {method:'GET',
              headers: headers,
              credentials: 'include'
             })
      .then(response => response.json())
      .then(json => fetchtopstudents_2(json));
      function fetchtopstudents_2(data){
        let html ='';
        Object.values(data).forEach(value => {
          html += '<table class="table-container_"><tr class="table-content driver'+value['a_Rank']+'"><td><span class="position">'+value['a_Rank']+'</span><span class="driver-name">Student:</span><span class="driver-surname">'+value['b_student_name']+'</span></td><td><span class="points">'+value['c_courses_completed']+' courses completed</span></td></tr></table>'
        });
  
$("#topstudents").empty().append(html);
}
}

function uploadcourse(){
  let a = $("#name").val();
  let b = $("#topicname").val();
  let c = $("#description").val();
  let d = $("#prerequisites").val();

  
  let url = 'http://127.0.0.1:5000/searchcourse';
    
   let headers = new Headers();
   data = {
     topic: b,
   }
     headers.append('Content-Type', 'application/json');
   // headers.set('Authorization', 'Basic ' +  btoa(us + ":" + pw));
     
     fetch(url, {method:'POST',
             headers: headers,
             body: JSON.stringify(data),
             credentials: 'include',
            })
     .then(response => response.json())
     .then(json => uploadcourse_2(json,a,c,d));
}

function uploadcourse_2(data,a_,c_,d_){
  let name_ = a_;
  let desc_ = c_;
  let preq_ = d_;
  Object.values(data).forEach(value => {
  uploadcourse_bridge(value['2_id'],name_,desc_,preq_);
  });
  
}
function uploadcourse_bridge(id__,name__,desc__,preq__){
  let id___= id__;
  let name___= name__;
  let desc___= desc__;
  let preq___= preq__;
  var token = getCookie('token');
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  data = JSON.parse(jsonPayload);
  id = $("#ci" + a).text();
  Object.keys(data).forEach(key => {
    if (key=="passkey"){
      uploadcourse_3(data['user'],data['passkey'],id___,name___,desc___,preq___);
    }
  });
}
function uploadcourse_3(us,pw,id,name,desc,preq){
  // let preq_ = [String(preq)];
  const parray = preq.split(", ");
  // console.log(parray);
  let url = 'http://127.0.0.1:5000/course';
    
   let headers = new Headers();
   data = {
     title:name,
     topic_id: id,
     description:desc,
     prerequisite: parray
   }
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Basic ' +  btoa(us + ":" + pw));
     
     fetch(url, {method:'POST',
             headers: headers,
             body: JSON.stringify(data),
             credentials: 'include',
            })
     .then(response => response.json())
     .then(json => uploadcourse_4(json));
}

function uploadcourse_4(data){
alert(data.message);
topiclist();
}