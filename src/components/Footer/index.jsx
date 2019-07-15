import React from 'react'

{{#with scss}}
import * as styles from './footer.scss'
{{/with}}
{{#with less}}
import * as styles from './footer.less'
{{/with}}
{{#with stylus}}
import * as styles from './footer.styl'
{{/with}}

export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.contianer}>
        <span>© <a href="https://www.baidu.com">百度</a></span>
      </div>
    )
  }
}