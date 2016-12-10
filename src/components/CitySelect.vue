/**
 * ----------------------------------------------------------
 * 城市选择控件简单封装
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/components/CitySelect
 * ----------------------------------------------------------
 */
<template>
    <div class="ux-city-select">
        <div class="ux-city-select-content">
            <mt-picker :slots="addressSlots" @change="onAddressChange" :visible-item-count="5"></mt-picker>
            <p class="ux-city-select-content-text">切换为：{{addressProvince}}--{{addressCity}}市</p>
            <div @touchend="select" class="ux-city-select-but">切换城市</div>
        </div>
    </div>
</template>

<script>
    import {CITY} from '../common/constant/constant';
    import {Picker} from 'mint-ui';
    export default {
        name: 'citySelect',
        data (){
            return {
                addressSlots: [
                    {
                        flex: 1,
                        values: Object.keys(CITY),
                        className: 'slot1',
                        textAlign: 'center'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values: ['北京'],
                        className: 'slot3',
                        textAlign: 'center'
                    }
                ],
                addressProvince: '北京',
                addressCity: '北京'
            }
        },
        components: {
            Picker
        },
        created (){
        },
        methods:{
            select(){
                this.$emit('select', {selectCity: this.addressCity})
            },
            onAddressChange(picker, values) {
                picker.setSlotValues(1, CITY[values[0]]);
                this.addressProvince = values[0];
                this.addressCity = values[1];
            }
        }
    }
</script>
<style lang="scss">
    .ux-city-select {
        width: 100%;
        height: 100%;
        background-color: rgba(10,10,10,0.55);
        position: fixed;
        top: 0;
        bottom: 0;
        .ux-city-select-content {
            height: 400px;
            padding-top: 30px;
            width: 100%;
            background-color: #fff;
            position: absolute;
            bottom: 0;
            border-top: 1px solid #999;
            .ux-city-select-content-text {
                margin-top: 30px;
                text-align: center;
                color: #18bba8;
                font-size: 20px;
            }
        }
        .ux-city-select-but {
            background-color: #254891;
            border: 1px solid #ddd;
            border-radius: 10px;
            height: 48px;
            line-height: 48px;
            width: 80%;
            text-align: center;
            font-size: 22px;
            color: #fff;
            margin: 50px auto;
        }
    }
</style>
