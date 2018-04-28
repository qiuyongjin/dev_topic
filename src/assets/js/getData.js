import axiosTool from './axios-tool'

// 获取项目
export const getProject = (data) => axiosTool(`/getProject`, data);
// 获取任务
export const task = (data) => axiosTool(`/task`, data);
// 触发机器人
export const robot = (data) => axiosTool(`/robot`, data);
// 添加任务
export const addTask = (data) => axiosTool(`/addtask`, data);
// 完成任务
export const doneTask = (data) => axiosTool(`/doneTask`, data);
// 添加任务组
export const addTaskGroup = (data) => axiosTool(`/addTaskGroup`, data);
// 注册用户
export const addUser = (data) => axiosTool(`/regUser`, data);
// 查询用户信息
export const getUserInfo = (data) => axiosTool(`/getUserInfo`, data);
// 添加项目
export const addProject = (data) => axiosTool(`/project/add`, data);
