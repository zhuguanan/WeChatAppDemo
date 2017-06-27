//app.js
//首先App函数是一个全局函数
//App函数的作用就是用来创建一个应用程序的实例
//每个应用程序都会有他的生命周期
App({
    
    foo(){
        return 'bar'
    },

    onLaunch(){
        console.log('onLaunch')
    }
})