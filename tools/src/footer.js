import React, { useEffect } from "react";
import $ from "jquery";

export function Footer() {
  useEffect(() => {
    $(".bottom-navigation__tabs a").click(function(event) {
      event.stopPropagation();
      event.preventDefault();

      const i = $(".bottom-navigation__tabs .bottom-navigation__item").index(
        $(this).parent()
      );

      $(this)
        .parent()
        .addClass("active")
        .siblings()
        .removeClass("active");

      $(".bottom-navigation__tab-content .bottom-navigation__list")
        .removeClass("active")
        .eq(i)
        .addClass("active");
    });
  }, []);
  return (
    <div class="block block-block first last odd" id="block-block-2">
      <div class="bottom-navigation layout-center jquery-once-1-processed">
        <ul class="bottom-navigation__list clearfix">
          <li class="bottom-navigation__item">
            <a href="//esf.cnnbfdc.com/about/website">平台介绍</a>
          </li>
          <li class="bottom-navigation__item">
            <a href="//esf.cnnbfdc.com/about">关于我们</a>
          </li>
          <li class="bottom-navigation__item">
            <a href="//esf.cnnbfdc.com/about/contactus">联系我们</a>
          </li>
          <li class="bottom-navigation__item">
            <a href="//esf.cnnbfdc.com/about/privacy">隐私声明</a>
          </li>
          <li class="bottom-navigation__item">
            <a href="//esf.cnnbfdc.com/about/map">网站地图</a>
          </li>
          <li class="bottom-navigation__item">
            <a href="//www.cnnbfdc.com/page/notice/clf.html" target="__blank">
              业务平台登录
            </a>
          </li>
          <li class="bottom-navigation__item">
            <a href="//www.cnnbfdc.com/home/newshome">房产新闻</a>
          </li>
          <li class="bottom-navigation__item">
            <a href="//www.cnnbfdc.com/download">下载中心</a>
          </li>
        </ul>
        <div class="bottom-navigation__tabs">
          <ul class="bottom-navigation__list clearfix">
            <li class="bottom-navigation__item active">
              <a href="#">国家部委厅网站</a>
            </li>
            <li class="bottom-navigation__item">
              <a href="#">六安市政府部门网站</a>
            </li>
            <li class="bottom-navigation__item">
              <a href="#">六安市经纪机构网站</a>
            </li>
            <li class="bottom-navigation__item">
              <a href="#">六安市房地产开发商网站</a>
            </li>
            <li class="bottom-navigation__item">
              <a href="#">六安市房地产信息服务网站</a>
            </li>
          </ul>
        </div>
        <div class="bottom-navigation__tab-content">
          <ul class="bottom-navigation__list active clearfix">
            <li class="bottom-navigation__item">
              <a href="http://www.gov.cn/" target="_blank">
                中央政府门户网站
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.chinatax.gov.cn/" target="_blank">
                国家税务总局
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.realestate.cei.gov.cn/" target="_blank">
                中国房地产信息网
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.wyzg.org/" target="_blank">
                中国房地产行业协
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.mohurd.gov.cn/" target="_blank">
                住建部
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.pbc.gov.cn/" target="_blank">
                人民银行
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.sdpc.gov.cn/" target="_blank">
                中国发改委员会
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.zjjs.com.cn/" target="_blank">
                浙江省建设厅
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.mlr.gov.cn/" target="_blank">
                国土资源部
              </a>
            </li>
          </ul>
          <ul class="bottom-navigation__list clearfix">
            <li class="bottom-navigation__item">
              <a href="http://www.ningbo.gov.cn/" target="_blank">
                六安政府网
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.nbdpc.gov.cn/" target="_blank">
                中国房地产行业协
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.nblr.gov.cn/" target="_blank">
                市国土资源局
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.nbplan.gov.cn/" target="_blank">
                六安市规划局
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://nb.wenming.cn/" target="_blank">
                六安文明网
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.nbcs.gov.cn/" target="_blank">
                市财税局
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.nbjs.gov.cn/" target="_blank">
                六安市住房和城乡建设委员会
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.nbgjj.com/" target="_blank">
                六安市住房公积金管理中心
              </a>
            </li>
          </ul>
          <ul class="bottom-navigation__list clearfix">
            <li class="bottom-navigation__item">
              <a href="##">暂无 </a>
            </li>
          </ul>
          <ul class="bottom-navigation__list clearfix">
            <li class="bottom-navigation__item">
              <a href="##"> 暂无 </a>
            </li>
          </ul>
          <ul class="bottom-navigation__list clearfix">
            <li class="bottom-navigation__item">
              <a href="http://www.xinhuanet.com/house/" target="_blank">
                新华网房产
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.nb-fx.cn/" target="_blank">
                六安市房地产业协会
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://nb.house.sina.com.cn/" target="_blank">
                新浪乐居
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://house.cnool.net/" target="_blank">
                东方热线房产网
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://house.focus.cn/" target="_blank">
                搜狐焦点房产
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://nb.soufun.com/" target="_blank">
                搜房网六安
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.ihoome.com/" target="_blank">
                爱家网
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://nb.house.qq.com/" target="_blank">
                腾讯房产
              </a>
            </li>
            <li class="bottom-navigation__item">
              <a href="http://www.china-crb.cn/" target="_blank">
                中国房地产网
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <div class="layout-center">
          Copyright@2001-2017 CNNBFDC.COM All Rights Reserved 浙ICP备05082368号
        </div>
      </div>
    </div>
  );
}
