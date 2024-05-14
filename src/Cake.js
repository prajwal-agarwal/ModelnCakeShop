import { Card, Image, Space } from "antd";
function Cake(props) {
  var data = {
    name: props.data.item,
    price: props.data.price,
    image: props.data.image,
    //"https://www.fnp.com/images/pr/l/v20231209130400/heavenly-surprise-birthday-floral-box_1.jpg",
  };
  var tag;
  if (props.data.tag) {
    tag = <p>{props.data.tag}</p>;
  } else {
    tag = null;
  }
  return (
    <Space direction="horizontal" size={16}>
      <Card style={{ width: 300 }}>
        <Image preview={false} src={data.image} width={300}></Image>
        <p>{data.name}</p>
        <p>{data.price}</p>
        {props.data.tag && <p>{props.data.tag}</p>}
      </Card>
    </Space>
  );
}
export default Cake;