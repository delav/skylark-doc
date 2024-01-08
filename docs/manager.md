# 平台管理

> 更新时间：2024-01-07


目前暂时没有后台Admin管理页面。所以一些操作需要通过调用API的方式管理，当然也可以直接修改数据库。

具体admin的API可查看文件 skylark/skylark/admin/url.py

```py
from rest_framework import routers
from application.libkeyword.views import AdminKeywordViewSets
from application.user.views import AdminUserViewSets
from application.usergroup.views import AdminUserGroupViewSets
from application.project.views import AdminProjectViewSets
from application.casepriority.views import AdminCasePriorityViewSets
from application.department.views import AdminDepartmentViewSets
from application.systemext.views import AdminSystemExtViewSets

admin_router = routers.SimpleRouter(trailing_slash=False)
admin_router.register('keyword', AdminKeywordViewSets, basename='admin_keyword')
admin_router.register('user', AdminUserViewSets, basename='admin_user')
admin_router.register('user_group', AdminUserGroupViewSets, basename='admin_user_group')
admin_router.register('project', AdminProjectViewSets, basename='admin_project')
admin_router.register('priority', AdminCasePriorityViewSets, basename='admin_priority')
admin_router.register('department', AdminDepartmentViewSets, basename='admin_department')
admin_router.register('system', AdminSystemExtViewSets, basename='admin_system')
```

添加用户接口：http://127.0.0.1:8000/api/admin/user
```json
{
	"email": "anlan@163.com",
	"group_id": 3
}
```

添加组件接口：http://127.0.0.1:8000/api/admin/keyword
```json
{
	"name": "replace_string",
	"ext_name": "替换字符串",
	"desc": "将给定字符串中的search_for替换为replace_with。", 
	"group_id": 5, 
	"input_params": "string|search_for|replace_with|count",
	"input_desc": "原始字符串|旧字符串|新字符串|替换的数量", 
	"output_params": "${out}",
	"output_desc": "替换后的字符串",
	"input_type": 1,
	"output_type": 1, 
	"category": 1
}
```

::: tip 说明
group_id，input_type，output_type，category 需要根据组件进行修改。
:::

