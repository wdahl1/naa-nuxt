// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],

  runtimeConfig: {
    env: 'local',
    hostname: 'http://localhost:3000',
    api: 'https://api-dev.adms-aaa.apps.asu.edu/api',
    feedbackForm: 'https://script.google.com/macros/s/AKfycbyrSA2j1iyk-S0cIdMtO9UYQkSISqK-gL0pkbM8vUA1sffAQBdeZJSYjkeXSpfnUozR-w/exec',
    asuriteLogin: 'https://signin.asu.edu/oauth2/authorize?identity_provider=asurite-shibboleth&redirect_uri=http://localhost:3000/oauth2/callback/&response_type=CODE&client_id=60nubif7gbqvj99mmf08raa2nk&scope=email%20openid%20profile',
    dpl: 'https://api.myasuplat-dpl.asu.edu/api',
    briteverifyKey: '<KEY>',
    legacyUndergrad: 'https://webapp4-dev.asu.edu/uga_admissionsapp/?reset=1',
    legacyAdmin: 'https://webapp4-dev.asu.edu/uga_admissionsapp/admin.jsp/',
    legacyAdminEdit: 'https://webapp4-dev.asu.edu/uga_admissionsapp/admin-edit-app.jsp',
    recaptchaKey: '<KEY>',
    legacyGrad: 'https://webapp4.asu.edu/dgsadmissions/Index.jsp',
    datadog: 'us5.datadoghq.com',
    datadogId: 'ca6d9603-1b3e-4344-a6fb-a7491253a42f',
    datadogKey: '<KEY>',
  },

  $development: {
    runtimeConfig: {
      env: 'development',
      hostname: 'https://apply-dev.apps.asu.edu',
      asuriteLogin: 'https://signin.asu.edu/oauth2/authorize?identity_provider=asurite-shibboleth&redirect_uri=https://apply-dev.apps.asu.edu/oauth2/callback/&response_type=CODE&client_id=60nubif7gbqvj99mmf08raa2nk&scope=email%20openid%20profile',
    }
  },

  $test: {
    runtimeConfig: {
      env: 'test',
      hostname: 'https://apply-qa.apps.asu.edu',
      api: 'https://api-qa.adms-aaa.apps.asu.edu/api',
      asuriteLogin: 'https://signin.asu.edu/oauth2/authorize?identity_provider=asurite-shibboleth&redirect_uri=https://apply-qa.apps.asu.edu/oauth2/callback/&response_type=CODE&client_id=60nubif7gbqvj99mmf08raa2nk&scope=email%20openid%20profile',
      dpl: 'https://api-tst.myasuplat-dpl.asu.edu/api',
      legacyUndergrad: 'https://webapp4-qa.asu.edu/uga_admissionsapp/?reset=1',
      legacyAdmin: 'https://webapp4-qa.asu.edu/uga_admissionsapp/admin.jsp/',
      legacyAdminEdit: 'https://webapp4-qa.asu.edu/uga_admissionsapp/admin-edit-app.jsp',
      legacyGrad: 'https://webapp4-qa.asu.edu/dgsadmissions/Index.jsp',
    }
  },

  $production: {
    runtimeConfig: {
      env: 'production',
      hostname: 'https://apply.apps.asu.edu',
      api: 'https://api.adms-aaa.apps.asu.edu/api',
      asuriteLogin: 'https://signin.asu.edu/oauth2/authorize?identity_provider=asurite-shibboleth&redirect_uri=https://apply.apps.asu.edu/oauth2/callback/&response_type=CODE&client_id=60nubif7gbqvj99mmf08raa2nk&scope=email%20openid%20profile',
      dpl: 'https://api.myasuplat-dpl.asu.edu/api',
      legacyUndergrad: 'https://webapp4.asu.edu/uga_admissionsapp/?reset=1',
      legacyAdmin: 'https://webapp4.asu.edu/uga_admissionsapp/admin.jsp/',
      legacyAdminEdit: 'https://webapp4.asu.edu/uga_admissionsapp/admin-edit-app.jsp',
      legacyGrad: 'https://webapp4.asu.edu/dgsadmissions/Index.jsp',
      datadog: 'datadoghq.com',
      datadogId: '32dbd4f3-ad34-4d91-8163-8b612d202162',
    }
  }
})