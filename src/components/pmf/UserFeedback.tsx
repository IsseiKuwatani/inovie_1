import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, Tag } from 'lucide-react';

interface UserFeedbackProps {
  filter: string;
  searchQuery: string;
}

const feedbacks = [
  {
    id: 1,
    user: '株式会社ABC',
    role: '営業部長',
    type: 'positive',
    rating: 5,
    content: '音声入力機能により、商談記録の作成時間が大幅に削減された。チーム全体の生産性が向上している。',
    tags: ['音声入力', '生産性向上'],
    likes: 12,
    comments: 3,
    date: '2024-03-20',
  },
  {
    id: 2,
    user: 'DEF株式会社',
    role: '営業マネージャー',
    type: 'suggestion',
    rating: 4,
    content: 'インサイト分析は非常に有用だが、カスタマイズ性の向上を期待したい。業界特有の指標を追加できると良い。',
    tags: ['分析機能', 'カスタマイズ'],
    likes: 8,
    comments: 5,
    date: '2024-03-19',
  },
  {
    id: 3,
    user: '株式会社GHI',
    role: 'セールスディレクター',
    type: 'negative',
    rating: 3,
    content: 'モバイルアプリの動作が時々不安定。特に大量のデータを扱う際にレスポンスが遅くなる。',
    tags: ['パフォーマンス', 'モバイル'],
    likes: 5,
    comments: 2,
    date: '2024-03-18',
  },
];

export default function UserFeedback({ filter, searchQuery }: UserFeedbackProps) {
  const [expandedFeedback, setExpandedFeedback] = useState<number | null>(null);

  const toggleExpand = (feedbackId: number) => {
    setExpandedFeedback(expandedFeedback === feedbackId ? null : feedbackId);
  };

  const filteredFeedbacks = feedbacks
    .filter(feedback => {
      if (filter === 'all') return true;
      return feedback.type === filter;
    })
    .filter(feedback => {
      if (!searchQuery) return true;
      return (
        feedback.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feedback.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feedback.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });

  return (
    <div className="space-y-4">
      {filteredFeedbacks.map((feedback) => (
        <div
          key={feedback.id}
          className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-gray-900">{feedback.user}</h3>
              <p className="text-sm text-gray-500">{feedback.role}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  feedback.type === 'positive'
                    ? 'bg-green-100 text-green-800'
                    : feedback.type === 'negative'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {feedback.type === 'positive'
                  ? 'ポジティブ'
                  : feedback.type === 'negative'
                  ? 'ネガティブ'
                  : '提案'}
              </span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-${
                      star <= feedback.rating ? 'yellow' : 'gray'
                    }-400`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-gray-600 mt-2">{feedback.content}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {feedback.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500 mt-3">
            <div className="flex items-center">
              <ThumbsUp className="w-4 h-4 mr-1" />
              {feedback.likes}
            </div>
            <div className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" />
              {feedback.comments}件のコメント
            </div>
            <span>{feedback.date}</span>
          </div>

          <div className="mt-3">
            <button
              onClick={() => toggleExpand(feedback.id)}
              className="text-sm text-indigo-600 hover:text-indigo-700"
            >
              {expandedFeedback === feedback.id ? 'コメントを閉じる' : 'コメントを表示'}
            </button>
          </div>

          {expandedFeedback === feedback.id && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="space-y-4">
                {[
                  {
                    user: '山田太郎',
                    role: 'プロダクトマネージャー',
                    content: '貴重なフィードバックありがとうございます。次回のアップデートで改善予定です。',
                    date: '2024-03-21',
                  },
                  {
                    user: '鈴木一郎',
                    role: '開発リーダー',
                    content: '具体的な改善案を検討中です。もう少々お待ちください。',
                    date: '2024-03-21',
                  },
                ].map((comment, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        {comment.user.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-900">
                          {comment.user}
                        </span>
                        <span className="text-gray-500 ml-2">{comment.role}</span>
                      </div>
                      <p className="text-sm text-gray-600">{comment.content}</p>
                      <p className="text-xs text-gray-500 mt-1">{comment.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}