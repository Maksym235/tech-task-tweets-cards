import { Btn } from "./LoadMore.styled";

export function LoadMoreBtn({ LoadMore }) {
  return (
    <Btn onClick={LoadMore} type="button">
      Load more
    </Btn>
  );
}
