import store from '@/store';
import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action,
} from 'vuex-module-decorators';
import { Profile } from '@/store/profile.model';
import { update } from '@/store/shared-user';
import axios, { AxiosRequestConfig } from 'axios';

const setStorage = (profile: Profile) => {
  sessionStorage.setItem('profile', JSON.stringify(profile));
};

@Module({ dynamic: true, store, name: 'profile', namespaced: true })
class ProfileModule extends VuexModule {
  public profile: Profile | null = null;

  // プロフィールを取得
  public get getProfile() {
    if (this.profile) {
      return this.profile;
    }
    const profile = sessionStorage.getItem('profile');
    if (profile) {
      return JSON.parse(profile) as Profile;
    }
    return null;
  }

  @Mutation
  private updateUserName(userName: string) {
    //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const profile = this.profile!;
    profile.userName = userName;
    setStorage(profile);
  }
  @Mutation
  private updateNickname(nickname: string) {
    //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const profile = this.profile!;
    profile.nickname = nickname;
    setStorage(profile);
  }
  @Mutation
  private updateThemeColor(themeColor: string) {
    //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const profile = this.profile!;
    profile.themeColor = themeColor;
    setStorage(profile);
  }
  @Mutation
  private saveProfile(profile: Profile) {
    //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.profile = profile;
    setStorage(profile);
  }
  @Mutation
  public clearProfile() {
    this.profile = null;
    sessionStorage.removeItem('profile');
  }

  @Action
  public async updateUserNameAsync(userName: string) {
    const data = { userName: userName };
    // eslint-disable-next-line no-useless-catch
    try {
      await axios.patch('profile', data, {
        retryable: true,
      } as AxiosRequestConfig);
      this.updateUserName(userName);
      //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      update(this.profile!);
    } catch (error) {
      throw error;
    }
  }
  @Action
  public async updateNicknameAsync(nickname: string) {
    this.updateNickname(nickname);
    //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    update(this.profile!);
  }
  @Action
  public async updateThemeColorAsync(themeColor: string) {
    this.updateThemeColor(themeColor);
    //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    update(this.profile!);
  }
  @Action
  public async signInAsync() {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await axios.get<Profile>('profile');
      this.saveProfile(response.data);
    } catch (error) {
      throw error;
    }
  }
  @Action
  public async sinOutAsync() {
    // eslint-disable-next-line no-useless-catch
    try {
      this.clearProfile();
    } catch (error) {
      throw error;
    }
  }
}

export const profileStore = getModule(ProfileModule);
