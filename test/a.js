document.write(new Date());
var a = 16 + "sada";
var person = {firstname : "hao",lastname : "ran" , age : 19 ,fullname : function(){
    return this.firstname + this.lastname;
}};
var stuinfo = {
    class : "310162班",
    stuid : "310162 01",
    sname : "韩梅梅",
    sex : "女",
    hobby : "绘画",
}
function myfunction(){
    document.getElementsByTagName("p")[0].innerHTML = person.fullname() + "现在" + person.age + "岁";
}
function showinfo(){
    document.getElementById("info").innerHTML = "所在班级：" + stuinfo.class + "<br/>" + "学号：" + stuinfo.stuid + "<br/>"
    + "姓名：" + stuinfo.sname + "<br/>" + "性别：" + stuinfo.sex + "<br/>" + "爱好：" + stuinfo.hobby;
}

function logincheck(){
    var user = login.user.value;
    var password = login.password.value;
    if(user.length < 6){
        alert("用户名不少于6位");
        return false;
    }
    if(password.length < 8){
        alert("密码不少于8位");
        return false;
    }
    return true;
}