import { jotaiStore } from "@renderer/lib/jotai"

import { createSettingAtom } from "./helper"

const createDefaultSettings = () => ({
  dataPersist: true,

  // mark unread
  scrollMarkUnread: true,
  hoverMarkUnread: true,
})
export const {
  useSettingKey: useGeneralSettingKey,
  useSettingSelector: useGeneralSettingSelector,
  setSetting: setGeneralSetting,
  clearSettings: clearGeneralSettings,
  initializeDefaultSettings: initializeDefaultGeneralSettings,
  getSettings: getGeneralSettings,
  useSettingValue: useGeneralSettingValue,

  settingAtom: __generalSettingAtom,
} = createSettingAtom("general", createDefaultSettings)

export const subscribeShouldUseIndexedDB = (
  callback: (value: boolean) => void,
) =>
  jotaiStore.sub(__generalSettingAtom, () =>
    callback(getGeneralSettings().dataPersist))