<template>
    <div class="mini-player">
        <div class="player-icon">
            <div class="icon-wrap">
                <i class="iconfont icon-kefu"></i>
            </div>
            <div class="player-title">
                身边的有声图书馆
            </div>
        </div>
        <div class="tool-icon">
            <i class="iconfont icon-liebiao"></i>
            <i class="iconfont icon-mine"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.mini-player{
    width: 100%;
    height: 56px;
    background-color: #fff;
    border-top: 1px solid #eee;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    .player-icon{
        flex-basis: 70%;
        display: flex;
        align-items: center;
        font-size: 15px;
        color: #333;
        .icon-wrap{
            width: 40px;
            height: 40px;
            line-height: 40px;
            background-color: #eee;
            margin: 0 10px;
            border-radius: 50%;
            .iconfont{
                display: inline-block;
                font-size: 40px;
                color: #ccc;
                transform: rotateZ(-45deg);
            }
        }
    }
    .tool-icon{
        height: 100%;
        flex-basis: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        .iconfont{
            margin: 0 10px;
            font-size: 24px;
        }
        .icon-liebiao{
            color: #eee;
        }
    }
}
</style>
