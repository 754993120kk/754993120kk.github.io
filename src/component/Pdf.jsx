import React, { memo, useCallback, useState } from "react";
//react预览pdf文件插件
import PDF from "react-pdf-js";
import { Button } from "antd";
import pdfs from "./苗育康-202100130221-实验3.pdf"; // 这里直接引入的pdf文件

export default memo(() => {
  const [pages, setPages] = useState({ page: 1, allPages: 1 });

  const getAllPages = useCallback(
    (pageNums) => {
      setPages((prev) => ({ ...prev, allPages: pageNums }));
    },
    [pages]
  );

  const nextPage = useCallback(
    (type) => {
      let currentPage = pages["page"];
      if (type == "next") {
        // 如果是下一页
        if (currentPage == pages["allPages"]) {
          alert("已经是最后一页了");
        } else {
          setPages((prev) => ({ ...prev, page: currentPage + 1 }));
        }
      } else {
        // 如果是上一页
        if (currentPage == 1) {
          alert("已经是第一页了");
        } else {
          setPages((prev) => ({ ...prev, page: currentPage - 1 }));
        }
      }
    },
    [pages]
  );

  return (
    <div>
    <Button type="primary" onClick={() => nextPage("up")}>上一页</Button>
        <span>
          {pages["page"]}/{pages["allPages"]}页
        </span>
        <Button type="primary" onClick={() => nextPage("next")}>下一页</Button>
      <PDF
          file={pdfs} //文件地址
          onDocumentComplete={getAllPages}
          page={pages["page"]} //文件页码
        /> 
    </div>
  );
});

