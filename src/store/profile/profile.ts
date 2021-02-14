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
import axios from 'axios';

@Module({ dynamic: true, store, name: 'profile', namespaced: true })
class ProfileModule extends VuexModule {
  public profile: Profile | null = null;

  // プロフィールを取得
  public get getProfile() {
    return this.profile;
  }

  @Mutation
  private updateUserName(userName: string) {
    //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.profile!.userName = userName;
  }
  @Mutation
  private updateNickname(nickname: string) {
    //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.profile!.nickname = nickname;
  }
  @Mutation
  private updateThemeColor(themeColor: string) {
    //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.profile!.themeColor = themeColor;
  }
  @Mutation
  private saveProfile(profile: Profile) {
    //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.profile = profile;
  }
  @Mutation
  public clearProfile() {
    this.profile = null;
  }

  @Action
  public async updateUserNameAsync(userName: string) {
    const data = { userName: userName };
    // eslint-disable-next-line no-useless-catch
    try {
      await axios.patch('profile', data);
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
