import { mount } from '@vue/test-utils'

// ここから自分が作ったコンポーネントに合わせて作り替える
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
})
