<script setup>
	import { onMounted, ref } from "vue";
	import loginBoxImg from '@/assets/images/company_default.jpg';
	import { usePageStore } from '@/stores/fulltoken'
	const useStore = usePageStore()

	import { useRouter } from "vue-router";
	import { citys } from '@/utils/cityGroups'
	import { getUserInfo } from "@/api/user";

	const router = useRouter();
	const UserShow = ref(false);
	const userLogType = ref(false);
	const routerName = ref('UserCenter');
	const LogTypeText = ref('个人中心')

	const userShowChange = () => {
		UserShow.value = !UserShow.value
	}
	const toLogIn = () => {
		router.push({
			name: 'Login'
		});
	}
	const toCompanyCenter = () => {
		const logStatus = useStore.useridentity === 'company';
		const logToken = !!useStore.usertoken;
		if (logStatus && logToken) {
			router.push({
				name: 'CompanyHome'
			});
		} else {
			router.push({
				name: 'Login',
				query: {
					LogUser: "company"
				}
			});
		}

	}
	const toSearchJob = () => {
		router.push({
			name: 'SearchJob'
		});
	}
	const toEntrepreneur = () => {
		router.push({
			name: 'EntrepreneurShipList'
		});
	}
	const jobProvinceList = citys
	const selectProvinceList = ref(null)
	const keyName = ref('')
	const searchClick = () => {
		router.push({
			name: 'SearchJob',
			query: {
				keyCity: selectProvinceList.value,
				keyName: keyName.value
			}
		});
	}
	const logOut = () => {
		// store.dispatch('updateToken', "")
		//store.dispatch('updatelogStatus', "")
		useStore.setUserToken(null)
		useStore.setUserIdentity(null)
		location.reload()
	}

	const logTypeCheck = () => {
		const token = useStore.usertoken;
		const logStatus = useStore.useridentity;
		if (token && logStatus) {
			userLogType.value = true
			if (logStatus === "user") {
				LogTypeText.value = '个人中心'
				routerName.value = 'UserCenter'
				//router.push({name: 'UserCenter'});
			} else if (logStatus === "company") {
				LogTypeText.value = '企业中心'
				routerName.value = 'CompanyHome'
				userLogType.value = false
				//router.push({name: 'CompanyHome'});
			}
		} else {
			userLogType.value = false
		}
	}
	const routerPath = () => {
		router.push({
			name: routerName.value
		});
	}

	const phoneType = ref(false)
	const handleResize = () => {
		const sUserAgent = navigator.userAgent.toLowerCase();
		const isAndroid = /android/.test(sUserAgent);
		const isLinux = /linux/.test(sUserAgent);
		const isIphone = /iphone/.test(sUserAgent);
		if (isAndroid || isLinux || isIphone) {
			phoneType.value = true
		}
	};
	const userName = ref()
	const getInfo = () => {
		const logStatus = useStore.useridentity;
		if (logStatus === "company") {
			return;
		}
		getUserInfo().then(res => {
			// const data = mixin.proxy.globalMethod(res)
			if (res.data.success) {
				userName.value = res.data.data.user_name
				userLogType.value = true
				logTypeCheck()
			} else {
				userLogType.value = false
				userToken.setUserToken(null)
			}
		}).catch().finally()
	}

	onMounted(() => {
		logTypeCheck()
		//handleResize()
		userShowChange()
		getInfo()
	})
</script>

<template>
  <div style="margin: 0 auto;background-color: white" class="pt-5 pb-2">
    <el-row :gutter="10">
      <el-col :span="6">
        <div>
          <img :src="loginBoxImg" style="max-width: 205px">
        </div>
      </el-col>
      <el-col :span="12">
        <div style="text-align: center">
          <el-input
              v-model="keyName"
              style="width: 100%!important;"
              placeholder="请输入职位名称"
              class="search_input"
          >
            <template #prepend>
              <el-select v-model="selectProvinceList" filterable placeholder="工作城市"
                         style="width: 110px;color:#248bcb;border-radius: 0;background-color: white" size="large">
                <el-option
                    v-for="item in jobProvinceList"
                    :key="item.cityCode"
                    :label="item.name"
                    :value="item.cityCode"
                />
              </el-select>
            </template>
            <template #append>
              <el-button
                  style="display: flex;align-items: center;background-color: #248bcb;color: white;height: 100%;border-radius: 0"
                  @click="searchClick">
                <i class="mdi mdi-magnify"></i>
                搜索
              </el-button>
            </template>
          </el-input>
        </div>
      </el-col>
      <el-col :span="6">
        <div style="display: flex;width: 100%;flex-direction: row-reverse">
          <div>
            <div style="background-color: #248bcb;justify-content: center;color: white" class="mb-1">
              <div style="display:flex;" v-if="!userLogType" class="py-2 px-5">
                <div style="white-space: nowrap">
                  <button style="color: white" @click="toLogIn">登录</button>
                </div>
                <div class="mx-1">|</div>
                <div style="white-space: nowrap">
                  <button style="color: white" @click="toLogIn">注册</button>
                </div>
              </div>
              <div v-if="userLogType" style="position: relative;width: 100%;" class="logHover">
                <button class="py-2 px-5">{{ userName }}</button>
                <div class="userLogOut py-2 px-5 position-absolute text-center" style="background-color: #248bcb;">
                  <button @click="logOut">退出登录</button>
                </div>
              </div>
            </div>
            <div style="white-space: nowrap;background-color: #248bcb;color: white;text-align: center;"
                 class="py-2 px-5">
              <button style="text-decoration: none;color: white" @click="toCompanyCenter">企业入口</button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <div style="width: 100%;background-color: #248bcb;">
    <div style="width: 1000px;margin: 0 auto;display: flex;justify-content: space-between;">
      <div style="position: relative" class="allJobTypeList">
        <a href="#">
          <div class="py-2 px-3"
               style="min-width: 240px;display: flex;justify-content: space-between;color: white;">
            <div>全部行业分类</div>
            <div>∨</div>
          </div>
        </a>
        <div class="allJobType">
          <a href="user/SearchJob.html?cType=IT/互联网/软件/通信"><p>IT/互联网/软件/通信</p></a>
          <a href="user/SearchJob.html?cType=传媒/广告/公关/文化"><p>传媒/广告/公关/文化</p></a>
          <a href="user/SearchJob.html?cType=机械/制造/消费品/贸易"><p>机械/制造/消费品/贸易</p></a>
          <a href="user/SearchJob.html?cType=汽车/电子/能源"><p>汽车/电子/能源</p></a>
          <a href="user/SearchJob.html?cType=财会/银行/金融/保险"><p>财会/银行/金融/保险</p></a>
          <a href="user/SearchJob.html?cType=建筑/房地产/物业管理"><p>建筑/房地产/物业管理</p></a>
          <a href="user/SearchJob.html?cType=医疗/制药/生物工程"><p>医疗/制药/生物工程</p></a>
          <a href="user/SearchJob.html?cType=环保/化工/农林牧渔"><p>环保/化工/农林牧渔</p></a>
          <a href="user/SearchJob.html?cType=教育/培训/科研/事业单位/国家机关"><p>教育/培训/科研/事业单位/国家机关</p>
          </a>
          <a href="user/SearchJob.html?cType=专业服务/检测/认证"><p>专业服务/检测/认证</p></a>
          <a href="user/SearchJob.html?cType=交通/运输/物流"><p>交通/运输/物流</p></a>
          <a href="user/SearchJob.html?cType=服务业/其他"><p>服务业/其他</p></a>
        </div>
      </div>
      <div class="menu_title" style="display:flex;align-items: center;color: white">
        <button class="px-3 text-center py-2"
                style="background-color: #FFFFFF;color: #ee7d31;border-top: #ee7d31 2px solid">首页
        </button>
        <button @click="toSearchJob" class="px-3 text-center py-2">职位搜索</button>
        <button @click="toEntrepreneur" class="px-3 text-center py-2">小启说</button>
        <button @click="routerPath" class="px-3 text-center py-2">{{ LogTypeText }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
	.header {
		display: flex;
		justify-content: space-between;
		background-color: #248bcb;
		align-items: center;
	}

	.header-search {
		display: flex;
		align-items: center;
		background-color: white;
	}

	a {
		color: #ffffff;
		text-decoration: none;
	}

	a:hover {
		color: #FFFFFF;
		background-color: #248bcb;
	}

	.menu_step button:hover {
		color: #FFFFFF;
	}

	.menu_step:hover {
		background-color: #248bcb;
	}

	.search_input {
		border: 3px solid #248bcb;
	}

	.flex-grow {
		flex-grow: 1;
	}

	.el-select {
		color: black;
	}

	.allJobType a {
		color: white;
	}

	.allJobType a:hover p {
		color: #ee7d31;
		background-color: rgba(255, 255, 255, 0.7);
	}

	.allJobType a p {
		padding: 1px 5px 1px 5px;
		border-bottom: 1px solid #b7b7b9;
		font-size: 14px;
	}

	.allJobType {
		position: absolute;
		z-index: 1;
		background-color: rgba(0, 0, 0, 0.3);
		color: white;
		min-width: 240px;
		display: none;
	}

	.allJobTypeList a div {
		background-color: #1f77af;
	}

	.allJobTypeList:hover a div {
		background-color: #ee7d31;
	}

	.allJobTypeList:hover .allJobType {
		opacity: 1;
		display: block;
	}

	.menu_title button:hover {
		color: #ee7d31;
		border-top: #ee7d31 2px solid;
		background-color: #FFFFFF;
	}

	.userLogOut {
		width: 100%;
		display: none;
	}

	.logHover:hover .userLogOut {
		display: block;
		width: 100%;
	}

	:deep(.el-input-group__prepend) {
		border-radius: 0;
	}

	:deep(.el-select__wrapper) {
		border-radius: 0;
	}
</style>