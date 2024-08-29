export enum PlatformEnum {
  Windows = 0,
  Mac = 1,
  Linux = 2,
  Android = 3,
  Ios = 4,
}

export enum UpgradeMode {
  Force = 1, // 强制
  Inquire, // 询问
  Lead, // 引导
}

export enum AgentStatus {
  ToUpload = 1, // 待上传
  Uploaded, // 已完成
}
