#### 动态加载JS文件

######　根据不同状态动态加载js。很像原生的AJAX
----------
```javascript
function loadJs(loadUrl,callback){
    var script = doucument.creteElement('script');
    var head = document.getElementsByTagName('head')[0];
    script.src = loadUrl;
    script.type = "text/javascript";
    //判断服务器
    if(navigator.userAgent.indexOf('IE') != -1){//IE
        script.onreadystatechange = function(){
            //判断资源绑定成功
            if(/^(loaded|complete)$/.test(readystate)){
                script.onreadystatechange = null;
                callback();
            }
        }
        script.onerror = function(){
            ....
        }
    }else{
        script.onload = function(){
            script.onload = null;
            callback();
        }
    }
}

function callback(){
    alert("回调函数");
}
```