import type {
  IntegrationAction,
  IntegrationGroup,
} from '../../types/integrationTypes';

interface IntegrationListPanelProps {
  integrationGroups: IntegrationGroup[];
  onSelectIntegration: (action: IntegrationAction) => void;
  className?: string; // For styling overrides
  selectedIntegration: IntegrationAction | null;
}

export default function IntegrationListModal({
  integrationGroups = [],
  onSelectIntegration,
  className = '',
  selectedIntegration,
}: IntegrationListPanelProps) {
  return (
    <div
      className={`bg-noble-black-700 rounded-lg border border-noble-black-600 text-noble-black-100 overflow-y-auto custom-scrollbar ${className}`}
    >
      <div className='p-4'>
        {integrationGroups.map((group, i) => (
          <div key={group.category + (group.name + i || '')} className='mb-4'>
            {group.name && (
              <h3 className='text-noble-black-300 text-xs uppercase font-semibold mb-2 text-start'>
                {group.name}
              </h3>
            )}
            <ul>
              {group.actions.map((action) => (
                <li
                  key={action.id}
                  className={`flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-noble-black-600 transition-colors ${
                    action.type === selectedIntegration?.type
                      ? 'bg-noble-black-600'
                      : ''
                  }`}
                  onClick={() => onSelectIntegration(action)}
                >
                  <div className='w-6 h-6 flex items-center justify-center text-xs font-bold'>
                    <img
                      src={action.icon}
                      alt={action.name}
                      className='w-5 h-5'
                    />
                  </div>
                  <span className='text-xs'>{action.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
