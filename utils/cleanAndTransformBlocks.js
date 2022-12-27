import { v4 as uuid } from "uuid";

export const cleanAndTransformBlocks = (blocksJSON) => {
  const blocks = JSON.parse(blocksJSON);

  const assignId = (block) => {
    block.forEach((item) => {
      item.id = uuid();
      if (item.innerBlocks?.length) {
        assignId(item.innerBlocks);
      }
    });
  };
  assignId(blocks);

  return blocks;
};
