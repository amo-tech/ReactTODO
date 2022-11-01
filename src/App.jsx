import { NodeBuilderFlags } from "typescript";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>
            <div>
            <span>123</span>
            <button>完了</button>
            <button>削除</button>
            </div>
          </li>
          <li>
            <div>
            <span>456</span>
            <button>完了</button>
            <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div>
      <p>完了のTODO</p>
        <ul>
          <li>
            <div>
            <span>aaa</span>
            <button>戻す</button>
            </div>
          </li>
          <li>
            <div>
            <span>bbb</span>
            <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}