export interface DownloadAgentPlatformItem {
  platform: PlatformEnum;
  standardArch: 'arm' | 'amd';
  agentPlatform: 'tauri' | 'electron';
  upgradeDownloadUrl: string;
  installDownloadUrl: string;
  versionName: string;
  versionCode: number;
  arch: string;
  changelog: string;
  upgradeMode: UpgradeMode;
  installSize: number;
}

export interface DownloadItem {
  platform: PlatformEnum;
  standardArch: string;
  icon: string;
  title: string;
  subTitle: any;
  downloadURL: string;
  info: string;
}
