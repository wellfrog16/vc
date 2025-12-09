// 如果把这个类型写在 input.vue 里，会导致 thousand-input.vue 在打包是报异常
// 放在这里就不会，异常信息如下：
// Return type of exported function has or is using name 'IPropType' from external module "E:/project/_mine/vc/packages/ui/src/components/input/input.vue" but cannot be named.
// Exported variable '__VLS_component' has or is using name 'IPropType' from external module "E:/project/_mine/vc/packages/ui/src/components/input/input.vue" but cannot be named.
export interface IInputProps {
    block?: boolean
    width?: string
}
