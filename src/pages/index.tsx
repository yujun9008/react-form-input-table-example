import styles from './index.less';
import { ReactFormInputTable } from 'react-form-input-table';

export default function IndexPage() {
  const COLUMNS = [
    {
      title: '名称',
      dataIndex: 'title',
    },
    {
      title: '富文本',
      dataIndex: 'richText',
      rows: '3',
    },
    {
      title: '日期',
      dataIndex: 'time',
      inputType: 'dateTimePicker',
    },
    {
      title: '开关',
      dataIndex: 'switch',
      inputType: 'boolean',
    },
    {
      title: '选择框',
      dataIndex: 'select',
      inputType: 'select',
      selectSource: [
        {
          id: 1,
          name: '第一项',
        },
        {
          id: 2,
          name: '第二项',
        },
      ],
    },
    {
      title: '自定义时间',
      dataIndex: 'dateRange',
      inputType: 'customAction',
      customRender: (record) => {
        return (
          <>
            <Button>自定义操作</Button>
          </>
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      inputType: 'operation',
    },
  ];
  const dataSource = [
    {
      id: 1,
      title: '测试',
      switch: true,
      select: 2,
    },
  ];
  const save = (values) => {};
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <ReactFormInputTable.d
        columns={COLUMNS_RELATED_WORD}
        dataSource={searchRelatedWordData}
        onSave={(values) => {
          save(values);
        }}
      />
    </div>
  );
}