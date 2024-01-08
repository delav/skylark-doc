# 项目部署

> 更新时间：2024-01-07


### skylark-web


下载依赖
```vue
npm install
```

编译运行
```vue
npm run serve
```

编译打包
```vue
num run build
```

### skylark

#### 安装依赖
```sh
pip install -r requirements.txt
```

#### 初始化数据库
```sh
# django初始化数据表
python manage.py makemigrations
python manage.py migrate

# 导入项目中的skylark.sql
mysql -u(username) -p(password)
source /path/skylark.sql
```

#### 启动django服务
```sh
python manage.py runserver 8080
```

#### 启动celery服务
```sh
celery -A skylark worker -n master.%h -l info
```

#### 启动celery beat
```sh
celery -A skylark beat -l info
```

### skylarkworker

#### 1.安装依赖
```sh
pip install -r requirements.txt
```

#### 2.启动服务
```sh
celery -A task worker -n slaver.%h -l info
```


### skylarklibrary

skylarklibrary作为关键字库，建议应该与skylarkworker共享同一环境，因为执行测试的时候，skylarklibrary是作为库的方式导入，
使用的是skylarkworker的运行环境。所以不建议使用单独的环境，如果必须使用单独环境，skylarkworker的环境中也必须包含
skylarklibrary环境的库，否则执行测试时会导致失败，找不到对应的库。

