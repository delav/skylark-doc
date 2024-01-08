# 配置说明

> 更新时间：2024-01-07


### skylark项目配置

配置文件路径 `skylark/skylark/settings.py`，部署之前需要修改以下配置信息。

#### MySQL配置

```py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'CONN_MAX_AGE': 3600,
        'NAME': 'skylark',
        'HOST': '127.0.0.1',
        'USER': 'root',
        'PASSWORD': '123456'
    }
}
```

#### Redis配置

```py
REDIS = {
    'HOST': '127.0.0.1',
    'PORT': '6379',
    'PASSWORD': '',
}
```

#### 服务地址

该配置的作用是为了生成供外部调用的完整接口地址。
```py
SERVER_DOMAIN = '127.0.0.1:8000'
```

#### Email配置

用于发送邮箱验证码和测试报告
```py
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_USE_TLS = True
EMAIL_USE_SSL = False
EMAIL_HOST = 'smtp.163.com'
EMAIL_PORT = 25
EMAIL_HOST_USER = 'admin@skylark.com'
EMAIL_HOST_PASSWORD = 'xxxxxx'
```

#### Library配置

配置业务功能关键字的仓库和本地路径。
```py
LIBRARY_BASE_DIR = BASE_DIR.parent
LIBRARY_GIT = 'https://github.com/delav/skylarklibrary.git'
LIBRARY_PATH = BASE_DIR.parent / 'skylarklibrary'
```

### skylarkworker项目配置

配置文件路径 `skylarkworker/settings.py`，部署之前需要修改以下配置信息。

#### Redis配置

```py
REDIS_HOST = '127.0.0.1'
REDIS_PORT = 6379
```

#### Library配置
```py
LIBRARY_GIT = 'https://github.com/delav/skylarklibrary.git'
LIBRARY_PATH = BASE_DIR.parent / 'skylarklibrary'
```

### skylarklibrary项目配置

无


### skylark-web项目配置

端口和后端地址修改文件 skylar-web/.env.development。

```
# listen port
PORT = 8091

# base url
VUE_APP_BASE_URL = 'http://localhost:8000/api'
```
