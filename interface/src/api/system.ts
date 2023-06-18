import { alovaInstance, alovaInstanceGH, startUploadFile } from './endpoints';
import type { FileUploadConfig } from './endpoints';
import type { AxiosPromise } from 'axios';

import type { OTASettings, SystemStatus, LogSettings, Version } from 'types';

// SystemStatus - also used to ping in Restart monitor
export const readSystemStatus = () => alovaInstance.Get<SystemStatus>('/rest/systemStatus');

// commands
export const restart = () => alovaInstance.Post('/rest/restart');
export const partition = () => alovaInstance.Post('/rest/partition');
export const factoryReset = () => alovaInstance.Post('/rest/factoryReset');

// OTA
export const readOTASettings = () => alovaInstance.Get<OTASettings>(`/rest/otaSettings`);
export const updateOTASettings = (data: any) => alovaInstance.Post('/rest/otaSettings', data);

// SystemLog
export const readLogSettings = () => alovaInstance.Get<LogSettings>(`/rest/logSettings`);
export const updateLogSettings = (data: any) => alovaInstance.Post('/rest/logSettings', data);
export const fetchLog = () => alovaInstance.Post('/rest/fetchLog');

// Get versions from github
export const getStableVersion = () =>
  alovaInstanceGH.Get<Version>('releases/latest', {
    transformData(reponse: any) {
      return {
        version: reponse.data.name,
        url: reponse.data.assets[1].browser_download_url,
        changelog: reponse.data.assets[0].browser_download_url
      };
    }
  });
export const getDevVersion = () =>
  alovaInstanceGH.Get<Version>('releases/tags/latest', {
    transformData(reponse: any) {
      return {
        version: reponse.data.name.split(/\s+/).splice(-1),
        url: reponse.data.assets[1].browser_download_url,
        changelog: reponse.data.assets[0].browser_download_url
      };
    }
  });

// TODO fileupload move to alova
export const uploadFile = (file: File, config?: FileUploadConfig): AxiosPromise<void> =>
  startUploadFile('/uploadFile', file, config);
