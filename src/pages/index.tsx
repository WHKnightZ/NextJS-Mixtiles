import { Button, Layout } from "components";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { getLsPhotos } from "utils";

const Home: NextPage = () => {
  const router = useRouter();

  const countImages = getLsPhotos()?.images?.length;

  return (
    <Layout>
      <div className="Home">
        <div className="Home-header">
          <div className="left fadeIn">
            <div className="column-1">
              <img alt="" src="https://www.mixtiles.com/static/media/hero_image_1@2x.1120dbc4.jpg" />
            </div>
            <div className="column-2">
              <div className="img-1">
                <img alt="" src="https://www.mixtiles.com/static/media/hero_image_2@2x.58e38615.jpg" />
              </div>
              <div className="img-2">
                <img alt="" src="https://www.mixtiles.com/static/media/hero_image_3@2x.4c000a25.jpg" />
              </div>
            </div>
          </div>
          <div className="right fadeIn slow">
            <div className="text-big">Biến ảnh thành tác phẩm treo tường tuyệt đẹp</div>
            <div className="text-small">
              Thiết kế những bức tường đẹp đầy kỷ niệm bằng những bức ảnh yêu thích của bạn
            </div>
            <Button variant="contained" size="large" onClick={() => router.push("/chon-anh")}>
              Thiết kế ngay{countImages > 0 ? ` (${countImages})` : ""}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
