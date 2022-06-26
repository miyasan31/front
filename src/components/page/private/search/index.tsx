import { Search } from "~/components/page/private/search/Search.page";
import { ErrorBoundary } from "~/components/provider/ErrorBoundary";
import { Suspense } from "~/components/provider/Suspense";

const SearchPage = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <Search />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SearchPage;
