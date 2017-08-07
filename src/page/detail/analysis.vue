<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>流量分析</h2>
      <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          购买数量：
        </div>
        <div class="sales-board-line-right">
          <v-counter @on-change="paramsChange('buyNum', $event)"></v-counter>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型：
        </div>
        <div class="sales-board-line-right">
          <v-selector :selections='buyTypes' @on-change="paramsChange('buyType', $event)"></v-selector>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          <v-counter @on-change="paramsChange('buyNum', $event)"></v-counter>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品版本：
        </div>
        <div class="sales-board-line-right">
          <v-counter @on-change="paramsChange('buyNum', $event)"></v-counter>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
          {{price}}
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VCounter from '../../components/base/counter.vue';
  import VSelector from '../../components/base/selector.vue';
  export default {
    components: {
      VCounter,
      VSelector
    },
    data() {
      return {
        buyNum: 0,
        buyType: {},
        version: [],
        period: {},
        price: 0,
        versionList: [
          {
            label: '客户版',
            value: 0
          },
          {
            label: '代理商版',
            value: 1
          },
          {
            label: '专家版',
            value: 2
          }
        ],
        periodList: [
          {
            label: '半年',
            value: 0
          },
          {
            label: '一年',
            value: 1
          },
          {
            label: '三年',
            value: 2
          }
        ],
        buyTypes: [
          {
            label: '入门版',
            value: 0
          },
          {
            label: '中级版',
            value: 1
          },
          {
            label: '高级版',
            value: 2
          }
        ]
      };
    },
    methods: {
      paramsChange(type, value) {
        this[type] = value;
        this.getPrice();
      },
      getPrice() {
        let versionArray = this.version.map((item) => {
          return item.value;
        });
        let reqParams = {
          buyNumber: this.buyNum,
          buyType: this.buyType.value,
          period: this.period.value,
          version: versionArray.join(',')
        };
        this.$http.post('/api/getPrice', reqParams)
          .then((res) => {
            this.price = res.data.amount;
          });
      }
    },
    mounted() {
      this.buyNum = 1;
      this.buyType = this.buyTypes[0];
      this.version = [this.versionList[0]];
      this.period = this.periodList[0];
      this.getPrice();
    }
  };
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}
</style>
